import connectDB from "../../../../utils/db";
import Product from "../../../models/productModel";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = params;
    const product = await Product.findById(id);

    return new Response(
      JSON.stringify({ message: "Products fetched successfully", product }),
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
