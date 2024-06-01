import { UserModel } from "../models/user.model.js";
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
    // todo=> encrypt password here
    const newUser = new UserModel({
      userName,
      password,
      fullName,
      gender,
      profilePic,
    });

    await newUser.save();
    return res.status(201).json({ message: "Signup successfull" });
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
    if (!user) {
      return res.status(404).json({
        message: "User not found!. Please check your username and password.",
      });
    }

    // todo=> use bcrypt here
    if (password !== user.password) {
      return res
        .status(404)
        .json({ message: "Please check your email and password." });
    }

    // todo=> create token here.

    return res.status(200).json({ message: "Login successfull.", data: user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error ", error: error.message });
  }
};
const logout = async (req, res) => {
  try {
    return res.json({ message: "logout" });
  } catch (error) {
    return res.json({ error: error.message });
  }
};
export { signup, login, logout };
