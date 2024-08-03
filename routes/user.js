import express from "express";
import {
  getUsers,
  updateUserRole,
  deleteUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const UserRouter = express.Router();

UserRouter.get("/users", protect, admin, getUsers);
UserRouter.put("/:userId/role", protect, admin, updateUserRole);
UserRouter.delete("/:userId", protect, admin, deleteUser);

export { UserRouter };
