import ConversationModel from "../models/conversation.model.js";
import { MessageModel } from "../models/message.model.js";
import { isValidMongooseId } from "../utils/isValidMongooseId.js";


export const sendMessage = async (req, res) => {
  try {
    // destructure id from req.params and assign to receiverId
    const {id: receiverId} = req.params;
    const {  message } = req.body;
    const senderId = req.user._id;

    if (!senderId || !receiverId || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!isValidMongooseId(senderId) || !isValidMongooseId(receiverId)) {
      return res
        .status(400)
        .json({ message: "Sender or receiver id is not valid." });
    }

    let conversation = await ConversationModel.findOne({
      participants: {$all: [senderId, receiverId]}
    })

    if (!conversation) {
      // if its their first messasge then we need to start a new conversation
      conversation = await ConversationModel.create({
        participants: [senderId, receiverId]
      })
    }
    const newMessage = new MessageModel({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.message.push(newMessage._id);
    }
    await newMessage.save();
    await conversation.save();
    return res.status(200).json({
      message: "Message send successfully",
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
