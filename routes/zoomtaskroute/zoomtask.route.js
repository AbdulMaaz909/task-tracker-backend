import express from "express";

import createZoomTask from "../../controllers/ZoomTaskController/zoomtask.controller.js";

const router = express.Router();

router.post("/createzoomtask",createZoomTask)

export default router;