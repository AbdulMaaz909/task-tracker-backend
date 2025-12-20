import express from "express";
import { registerUser,loginUser ,getAllUser} from "../../controllers/AuthController/auth.controller.js";
import verifyToken from "../../middleware/AuthMiddleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser)
router.get('/users',verifyToken,getAllUser);

export default router;
// /api/auth/register