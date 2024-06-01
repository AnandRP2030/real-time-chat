import mongoose from "mongoose";
export const connectToMongoDB = async () => {
  try {
    const MONGODB_URI =
      process.env.MONGODB_URI || "mongodb://localhost:27017/my-chat-app";
    await mongoose.connect(MONGODB_URI);
    console.log("Connect DB successfully.");
  } catch (error) {
    console.log("Error on connect Mongo DB", error);
  }
};
