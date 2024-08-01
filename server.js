import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectViaMongoose } from "./config/db.js";
import { UserRouter } from "./routes/user.js";
import { AuthRouter } from "./routes/auth.js";
// import { connectDB } from "./config/db.js";

dotenv.config();
connectViaMongoose();
// connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", AuthRouter);
app.use("/api/users", UserRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
