import connectDB from "../../../../../utils/db";
import Product from "../../../../models/productModel";
import Category from "../../../../models/categoryModel";
import { authMiddleware } from "../../../../../utils/authMiddleware";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = params;

    const product = await Product.find({ category: id });

    return new Response(
      JSON.stringify({
        message: "Products fetched successfully",
        product,
        count: product.length,
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

    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      return new Response(JSON.stringify({ error: "Category not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        message: "Category deleted successfully",
        deletedCategory: deletedCategory.category,
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
