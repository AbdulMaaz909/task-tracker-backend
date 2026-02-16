import express from "express"
import {
  createTask,
  deleteTask,
  getAllTasks,
  getMyTasks,
  updateTaskStatus,
} from "../../controllers/TaskController/task.controller.js"

import verifyToken  from "../../middleware/AuthMiddleware/auth.middleware.js";

const router = express.Router();


router.post("/createtask", verifyToken, createTask);

router.get("/getalltasks",verifyToken,getAllTasks);

router.get("/getmytask",verifyToken,getMyTasks);

router.patch("/updatetask/:id",verifyToken,updateTaskStatus);

router.delete("/deletetask/:id",verifyToken, deleteTask)

export default router;