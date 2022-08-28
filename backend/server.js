import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";

// const corsOption = {
//   credentials: true,
//   origin: ["http://localhost:3000"],
//   methods: ["GET", "POST"],
//   allowedHeaders: "origin, content-type, accept",
// };

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
app.use("/api/task", todoRoute);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("SERVER IS RUNNING ON PORT 5000"));
