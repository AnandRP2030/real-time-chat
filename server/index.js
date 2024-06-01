import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import { connectToMongoDB } from "./db/connectToMongoDb.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.json())
// prefixing all routes with /api/auth
app.use("/api/auth", authRouter);

connectToMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
});
