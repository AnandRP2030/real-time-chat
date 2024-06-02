import express from "express";
import dotenv from "dotenv";
import { connectToMongoDB } from "./db/connectToMongoDb.js";
import authRouter from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.json())
// prefixing all routes with /api/auth
app.use("/api/auth", authRouter);
app.use("/api/message", messageRoutes)
connectToMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
});
