import { UserModel } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

const signup = async (req, res) => {
  try {
    const { userName, password, fullName, gender } = req.body;

    if (!userName || !password || !fullName || !gender) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await UserModel.findOne({ userName });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "This username already taken!. Try another one" });
    }

    const boyOrGirl = gender === "male" ? "boy" : "girl";
    const profilePic = `https://avatar.iran.liara.run/public/${boyOrGirl}?username=${userName}`;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      userName,
      password: hashedPassword,
      fullName,
      gender,
      profilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      return res
        .status(201)
        .json({ message: "Signup successfull", data: newUser });
    } else {
      return res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error ", error: error.message });
  }
};
const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      return res
        .status(400)
        .json({ message: "Username and password is required." });
    }


    const user = await UserModel.findOne({ userName });
    const isPasswordMatch = await bcrypt.compare(password, user?.password || "");

    if (!user || !isPasswordMatch) {
      return res
        .status(404)
        .json({ message: "Please check your username and password." });
    }

    const token = generateTokenAndSetCookie(user._id, res);
    return res
      .status(200)
      .json({ message: "Login successfull.", data: user, token });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error ", error: error.message });
  }
};
const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({ message: "Logout successfully." });
  } catch (error) {
    console.log("Error on logout", error);
    return res
      .status(500)
      .json({ message: "Internal server error ", error: error.message });
  }
};

export { signup, login, logout };
