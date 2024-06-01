import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import { connectToMongoDB } from "./db/connectToMongoDb.js";
dotenv.config();
const app = express();
app.get("/", (req, res) => {
  res.send("chat appp working");
});

// prefixing all routes with /api/auth
app.use("/api/auth", authRouter);
const PORT = process.env.PORT || 8000;

connectToMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
});
