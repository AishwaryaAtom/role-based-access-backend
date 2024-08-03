import express from "express";
import { protect, admin } from "../middlewares/authMiddleware.js";
import {
  getReports,
  createReport,
  updateReport,
  deleteReport,
} from "../controllers/reportController.js";

const reportRouter = express.Router();

reportRouter.get("/", protect, getReports);
reportRouter.post("/", protect, createReport);
reportRouter.put("/:reportId", protect, updateReport);
reportRouter.delete("/:reportId", protect, admin, deleteReport);

export { reportRouter };
