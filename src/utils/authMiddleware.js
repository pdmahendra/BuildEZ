import jwt from "jsonwebtoken";
import User from "../app/models/userModel";

export const authMiddleware = async (req) => {
  const authHeader = req.headers.get && req.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return {
      status: 401,
      body: { message: "Unauthorized Access" },
    };
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return {
        status: 404,
        body: { message: "User not found" },
      };
    }

    req.user = { id: user._id, username: user.username };

    return { status: 200 };
  } catch (error) {
    return {
      status: 401,
      body: { message: "Unauthorized Access" },
    };
  }
};
