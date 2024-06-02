import { MessageModel } from "../models/message.model.js";

export const createNewMessage = async (req, res) => {
  try {
    const { senderId, receiverId, message } = req.body;
    if (!senderId || !receiverId || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newMessage = new MessageModel({
      senderId,
      receiverId,
      message,
    });
    await newMessage.save();
    return res
      .status(200)
      .json({
        message: "New message is created successfully",
        data: newMessage,
      });
  } catch (error) {
    console.log("Internal error on create new message", error);
    return res.status(500).json({ message: "Internal server error.", error });
  }
};

export const getAllMessages = async (req, res) => {
  try {
    const allMessages = await MessageModel.find({});
    return res.status(200).json({ message: "All messages", data: allMessages });
  } catch (error) {
    console.log("Internal error on create new message", error);
    return res.status(500).json({ message: "Internal server error.", error });
  }
};
