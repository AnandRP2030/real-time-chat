import express from "express";
import dotenv from "dotenv";
import { connectToMongoDB } from "./db/connectToMongoDb.js";
import authRouter from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import cookieParser from 'cookie-parser'
import cors from 'cors'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cookieParser());
app.use(cors());
app.use(express.json())

// Prefixing routes 
app.use("/api/auth", authRouter);
app.use("/api/message", messageRoutes)

connectToMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
});
