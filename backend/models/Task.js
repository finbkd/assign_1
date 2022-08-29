import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    task: {
      type: String,
      require: true,
      min: 3,
      max: 50,
      unique: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    date: {
      type: String,
      require: true,
    },
    Month: {
      type: Number,
      require: true,
    },
    Year: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
