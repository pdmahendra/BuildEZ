import connectDB from "../../../utils/db";
import { authMiddleware } from "../../../utils/authMiddleware";

export async function GET(req) {
  const authResponse = await authMiddleware(req);

  if (authResponse.status !== 200) {
    return new Response(JSON.stringify({ message: authResponse.body }), {
      status: authResponse.status,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    await connectDB();
    return new Response(JSON.stringify({ message: "Connected to MongoDB!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
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
