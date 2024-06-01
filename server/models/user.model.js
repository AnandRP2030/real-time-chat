import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "other"],
  },
  profilePic: {
    type: String,
    default: ""
  }
});

// collection name (here User) should be capitalize
const UserModel = mongoose.model("User", userSchema);
module.exports = { UserModel };
