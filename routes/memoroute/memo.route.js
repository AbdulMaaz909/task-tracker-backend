import express from "express";
import { createMemo,deleteMemo,getMemo, updateMemo } from "../../controllers/MemoController/memo.controller.js";
import verifyToken from "../../middleware/AuthMiddleware/auth.middleware.js";

const router = express.Router();

router.post('/creatememo',verifyToken,createMemo);
router.get('/getmemo',verifyToken,getMemo)
router.put('/updatememo/:id',verifyToken,updateMemo);
router.delete('/deletememo/:id',verifyToken,deleteMemo);
export default router;