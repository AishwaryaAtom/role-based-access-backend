// reportController.js

import { Report } from "../models/report.js";
const getReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const createReport = async (req, res) => {
  const { title, content } = req.body;

  try {
    const report = new Report({ title, content, user: req.user._id });
    await report.save();
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const updateReport = async (req, res) => {
  const { reportId } = req.params;
  const { title, content } = req.body;

  try {
    const report = await Report.findById(reportId);

    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    report.title = title || report.title;
    report.content = content || report.content;
    await report.save();

    res.json(report);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const deleteReport = async (req, res) => {
  const { reportId } = req.params;

  try {
    const report = await Report.findByIdAndDelete(reportId);
    if (!report) return res.status(404).json({ message: "Report not found" });
    res.status(200).json({ message: "Report deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
export { getReports, createReport, updateReport, deleteReport };
