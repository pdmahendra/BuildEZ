import connectDB from "../../../../utils/db";
import Product from "../../../models/productModel";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = params;
    console.log(id);

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
