import mongoose from "mongoose";
const { Schema } = mongoose;
const messageSchema = Schema(
  {
    receiverId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    senderId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const MessageModel = mongoose.model("Message", messageSchema);
