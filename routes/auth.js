import express from "express";
import { registerUser, authUser } from "../controllers/authController.js";

const AuthRouter = express.Router();

AuthRouter.post("/register", registerUser);
AuthRouter.post("/login", authUser);

export { AuthRouter };
