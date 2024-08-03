import { Schema, model } from "mongoose";

// Define the report schema
const reportSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update the `updatedAt` field before saving
reportSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create and export the model

const Report = new model("Report", reportSchema);
export { Report };
