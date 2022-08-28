import asyncHandler from "express-async-handler";
import Task from "../models/Task.js";

export const fetchTask = asyncHandler(async (req, res) => {
  try {
    const { date, id } = req.body;

    const task = await Task.findById(id);
    res.status(200).send(task);
  } catch (err) {
    res.status(500).json(err);
  }
});

export const fetchTasksByDate = asyncHandler(async (req, res) => {
  try {
    const { date } = req.body;

    const task = await Task.find({ date });
    res.status(200).send(task);
  } catch (err) {
    res.status(500).json(err);
  }
});

export const createTask = asyncHandler(async (req, res) => {
  try {
    const { task, date } = req.body;

    const newTask = await Task.create({ task, date });

    res.status(200).send(newTask);
  } catch (err) {
    res.status(500).json(err);
  }
});

export const updateTask = asyncHandler(async (req, res) => {
  try {
    const { task, id, completed } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(id, {
      task,
      completed,
    });
    res.status(200).send(updatedTask);
  } catch (err) {
    res.status(500).json(err);
  }
});

export const deleteTask = asyncHandler(async (req, res) => {
  try {
    const { id } = req.body;

    const task = await Task.deleteOne({ id });
    res.status(200).json("Task has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
