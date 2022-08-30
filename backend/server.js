import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// const corsOption = {
//   credentials: true,
//   origin: ["http://localhost:3000"],
//   methods: ["GET", "POST"],
//   allowedHeaders: "origin, content-type, accept",
// };

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, () => {
      console.log("CONNECTED TO MONGO DB SERVER...");
    });

    // console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

import todoRoute from "./routes/todo.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

connectDB();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "/client/build")));
app.use("/api/task", todoRoute);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("SERVER IS RUNNING ON PORT 5000"));
