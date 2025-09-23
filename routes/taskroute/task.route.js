import express from "express"
import {
  createTask,
  getAllTasks,
  getMyTasks,
  updateTaskStatus,
} from "../../controllers/TaskController/task.controller.js"

import verifyToken  from "../../middleware/AuthMiddleware/auth.middleware.js";

const router = express.Router();


router.post("/", verifyToken, createTask);

router.get("/",verifyToken,getAllTasks);

router.get("/mytask",verifyToken,getMyTasks);

router.patch("/task/:id",verifyToken,updateTaskStatus);

export default router;