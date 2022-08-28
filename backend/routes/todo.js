import express from "express";
import { createTask, deleteTask, fetchTask, fetchTasksByDate, updateTask } from "../controllers/todoController.js";
const router = express.Router();

// import { greetMe, loginUser, refresh, registerUser } from "../controllers/authController.js";

//m/ ROUTES
// router.route("/fetch").get(fetchTask);
router.route("/date").post(fetchTasksByDate);
router.route("/").post(createTask);
router.route("/").put(updateTask);
router.route("/").delete(deleteTask);
// router.route("/task").delete(deleteTask);
// router.route("/hi").post(protect, greetMe);

export default router;
