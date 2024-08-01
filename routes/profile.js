// const express = require("express");
// const router = express.Router();
// const { protect } = require("../middleware/authMiddleware");
// const User = require("../models/User");
import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { User } from "../models/user.js";
const profileRouter = express.Router();
// Middleware to protect routes
profileRouter.get("/me", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

export { profileRouter };
