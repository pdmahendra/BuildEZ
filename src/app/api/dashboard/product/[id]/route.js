import connectDB from "../../../../../utils/db";
import Product from "../../../../models/productModel";
import { authMiddleware } from "../../../../../utils/authMiddleware";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = params;
    const product = await Product.findById(id);

    return new Response(
      JSON.stringify({ message: "Product fetched successfully", product }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to connect to MongoDB" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const authResponse = await authMiddleware(req);

    if (authResponse.status !== 200) {
      return new Response(JSON.stringify(authResponse.body), {
        status: authResponse.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { id } = params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        message: "Product deleted successfully",
        deletedProduct: deletedProduct.productName,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to connect to MongoDB" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
