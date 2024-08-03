import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectViaMongoose } from "./config/db.js";
import { UserRouter } from "./routes/user.js";
import { AuthRouter } from "./routes/auth.js";
import { profileRouter } from "./routes/profile.js";
import { reportRouter } from "./routes/report.js";
// import { connectDB } from "./config/db.js";

dotenv.config();
connectViaMongoose();
// connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", AuthRouter);
app.use("/api/users", UserRouter);
app.use("/api/auth", profileRouter);
app.use("/api/reports", reportRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
