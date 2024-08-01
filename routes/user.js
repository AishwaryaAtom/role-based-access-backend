import express from "express";
import { getUsers, updateUserRole } from "../controllers/userController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const UserRouter = express.Router();

UserRouter.get("/users", protect, admin, getUsers);
UserRouter.put("/role", protect, admin, updateUserRole);

export { UserRouter };
