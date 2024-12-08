import connectDB from "../../../../utils/db";
import User from "../../../models/userModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    await connectDB();
    const { username, password } = await req.json();
    

    if (!username || !password) {
      return new Response(
        JSON.stringify(
          { message: "username and password is required" },
          { status: 400, headers: { "Content-Type": "application/json" } }
        )
      );
    }

    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      return new Response(
        JSON.stringify(
          { message: "User does not exist" },
          { status: 400, headers: { "Content-Type": "application/json" } }
        )
      );
    }

    //register
    // if (!existingUser) {
    //   const hashPassword = await bcrypt.hash(password, 10);
    //   const newUser = await User.create({
    //     username,
    //     password: hashPassword,
    //   });

    //   const token = jwt.sign(
    //     { id: newUser._id, username: newUser.username },
    //     process.env.JWT_SECRET,
    //     { expiresIn: "1d" }
    //   );

    //   return new Response(
    //     JSON.stringify({
    //       message: "User registered successfully",
    //       user: { id: newUser._id, username: newUser.username },
    //       token,
    //     }),
    //     {
    //       status: 201,
    //       headers: { "Content-Type": "application/json" },
    //     }
    //   );
    // }

    //login
    if (existingUser) {
      const isPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!isPasswordCorrect) {
        return new Response(
          JSON.stringify({ message: "Invalid username or password" }),
          {
            status: 401,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      const token = jwt.sign(
        { id: existingUser._id, username: existingUser.username },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      return new Response(
        JSON.stringify({
          message: "Login successful",
          user: { id: existingUser._id, username: existingUser.username },
          token,
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("Error occurred during login:", error);
    return new Response(JSON.stringify({ message: "An error occurred" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
