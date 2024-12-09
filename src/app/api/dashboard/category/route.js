import Category from "../../../models/categoryModel";
import connectDB from "../../../../utils/db";
import { authMiddleware } from "../../../../utils/authMiddleware";

export async function POST(req) {
  await connectDB();

  const authResponse = await authMiddleware(req);

  if (authResponse.status !== 200) {
    return new Response(JSON.stringify({ message: authResponse.body }), {
      status: authResponse.status,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { category, image } = await req.json();

  if (!category || !image) {
    return new Response(
      JSON.stringify({ message: "All fields are required" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const newCategory = await Category.create({
    category,
    image,
  });

  return new Response(
    JSON.stringify({
      message: "Category created successfully",
      category: newCategory,
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

    const category = await Category.find();

    return new Response(
      JSON.stringify({ message: "Categories fetched successfully", category }),
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
