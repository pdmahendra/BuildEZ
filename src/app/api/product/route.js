import Product from "../../models/productModel";
import connectDB from "../../../utils/db";
import { authMiddleware } from "../../../utils/authMiddleware";

export async function POST(req) {
  await connectDB();

  const authResponse = await authMiddleware(req);

  if (authResponse.status !== 200) {
    return new Response(JSON.stringify({ message: authResponse.body }), {
      status: authResponse.status,
      headers: { "Content-Type": "application/json" },
    });
  }

  const {
    productName,
    price,
    productDescription,
    productDetails,
    category,
    images,
  } = await req.json();

  if (
    !productName ||
    !price ||
    !productDescription ||
    !productDetails ||
    !category
  ) {
    return new Response(
      JSON.stringify({ message: "All fields are required" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const newProduct = await Product.create({
    productName,
    price,
    productDescription,
    productDetails,
    category,
    images,
  });

  return new Response(
    JSON.stringify({
      message: "Product created successfully",
      product: newProduct,
    }),
    {
      status: 201,
      headers: { "Content-Type": "application/json" },
    }
  );
}

export async function GET() {
  try {
    await connectDB();

    const products = await Product.find();

    return new Response(
      JSON.stringify({ message: "Products fetched successfully", products }),
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
