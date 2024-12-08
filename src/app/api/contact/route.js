import Contact from "../../models/contactModel";
import connectDB from "../../../utils/db";

export async function POST(req) {
  await connectDB();
  try {
    const { fullName, email, phone, address, message } = await req.json();

    if (!fullName || !email || !phone || !address || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const newContact = await Contact.create({
      fullName,
      email,
      phone,
      address,
      message,
    });

    return new Response(
      JSON.stringify({
        message: "New Contact Created",
        contact: newContact,
      }),
      {
        status: 201,
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

export async function GET() {
  await connectDB();
  try {
    const contacts = await Contact.find();

    return new Response(
      JSON.stringify({ message: "Contact fetched successfully", contacts }),
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
