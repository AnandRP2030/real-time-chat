import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      // 401 => unauthorized
      return res
        .status(401)
        .json({ error: "Unauthorized - No token is provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      return res
        .status(401)
        .json({ error: "Unauthorized - Token is either expired on invalid." });
    }

    const user = await UserModel.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    req.userId = user._id;
    next();
  } catch (error) {
    console.log("Error on protect route", error.message);
    return res.status(500).json({ message: "Internal server error", error });
  }
};
