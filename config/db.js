import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbUrl = "127.0.0.1:27017";
const dbName = process.env.DB_NAME || "Role";
const dbPassword = process.env.DB_PASSWORD || "";
const dbUsr = process.env.DB_USERNAME || "";
const dbCluster = process.env.DB_CLUSTER || "";

const localUrl = `mongodb://${dbUrl}`;
const cloudUrl = `mongodb+srv://${dbUsr}:${dbPassword}@${dbCluster}/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;
// Connecting to the asynchronously
const connectViaMongoose = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongoose Connected Successfully");
  } catch (e) {
    console.log("Error connecting to database", e);
    process.exit(1);
  }
};

// export default connectViaMongoose;

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

export { connectViaMongoose };
