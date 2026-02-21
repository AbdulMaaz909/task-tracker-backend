import express from "express";
import { registerUser,loginUser ,getAllUser} from "../../controllers/AuthController/auth.controller.js";
import verifyToken from "../../middleware/AuthMiddleware/auth.middleware.js";
import isAdmin from "../../middleware/AdminMiddleware.js/admin.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser)
router.get('/users',verifyToken,isAdmin,getAllUser);

export default router;
