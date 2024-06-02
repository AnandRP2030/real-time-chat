import { UserModel } from "../models/user.model.js";
import { isValidMongooseId } from "../utils/isValidMongooseId.js";
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find({});
    return res.status(200).json({ message: "All users", data: allUsers });
  } catch (error) {
    console.log("Error on get all users", error);
    return res
      .status(500)
      .json({ message: "Internal server error ", error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidMongooseId(id)) {
      return res.status(400).json({ message: "id is not valid" });
    }

    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User found", data: user });
  } catch (error) {
    console.log("Error on get user by id", error);
    return res
      .status(500)
      .json({ message: "Internal server error ", error: error.message });
  }
};

const getUsersExcludingCurrent  = async (req, res) => {
  try {
      const currentUserId = req.user._id;
    // ne => not equal 
    const filteredUsers = await UserModel.find({
      _id: { $ne: currentUserId },
    }).select("-password");

    return res
      .status(200)
      .json({
        message: "All users except current user",
        data: filteredUsers,
      });
  } catch (error) {
    console.log("Error on getUsersExcludingCurrent", error);
    return res
      .status(500)
      .json({ message: "Internal server error ", error: error.message });
  }
};
export { getAllUsers, getUserById, getUsersExcludingCurrent };
