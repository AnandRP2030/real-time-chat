import express from "express";
import {
  getAllUsers,
  getUserById,
  getUsersExcludingCurrent,
} from "../controllers/user.controller.js";
import { protectRoute } from "../middlewares/protectRoutes.js";
const userRouter = express.Router();

userRouter.get("/", protectRoute, getAllUsers);
userRouter.get(
    "/users-excluding-current",
    protectRoute,
    getUsersExcludingCurrent
);

// this route should be last 
userRouter.get("/:id", protectRoute, getUserById);
export { userRouter };
