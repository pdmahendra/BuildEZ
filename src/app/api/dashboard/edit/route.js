import Product from "../../../models/productModel";
import connectDB from "../../../../utils/db";
import { authMiddleware } from "../../../../utils/authMiddleware";
export async function PUT(req) {
  try {
    await connectDB();

    const authResponse = await authMiddleware(req);

    if (authResponse.status !== 200) {
      return new Response(JSON.stringify(authResponse.body), {
        status: authResponse.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    const {
      productId,
      productName,
      price,
      productDescription,
      productDetails,
      category,
      images,
      extraFields,
    } = await req.json();

    if (!productId) {
      return new Response(
        JSON.stringify({ message: "Product ID is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        productName,
        price,
        productDescription,
        productDetails,
        category,
        images: images || [],
        extraFields,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        message: "Product updated successfully",
        product: updatedProduct,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error while processing the PUT request:", error);
    return new Response(
      JSON.stringify({
        message: "An error occurred while processing the request abcd",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
