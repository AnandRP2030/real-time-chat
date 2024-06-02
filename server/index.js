import express from "express";
import dotenv from "dotenv";
import { connectToMongoDB } from "./db/connectToMongoDb.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { authRouter } from "./routes/auth.routes.js";
import { messageRoutes } from "./routes/message.routes.js";
import { userRouter } from "./routes/user.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cookieParser());
app.use(cors());
app.use(express.json());

// Prefixing routes
app.use("/api/auth", authRouter);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRouter);

app.all('/*',(req, res) => {
  res.send("Check routes")
})
connectToMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
});
