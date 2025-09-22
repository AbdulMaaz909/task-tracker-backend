import express from "express";
import { registerUser,loginUser } from "../../controllers/AuthController/auth.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser)

export default router;
// /api/auth/register