import express from 'express';
import { createExpense,updateExpense,deleteExpense,getAllExpense } from '../../controllers/ExpensesController/expense.controller.js';
import isAdmin from '../../middleware/AdminMiddleware.js/admin.middleware.js';
import verifyToken from '../../middleware/AuthMiddleware/auth.middleware.js';

const router = express.Router();

router.post("/createexpense",verifyToken,createExpense);
router.put("/updateexpense/:id",verifyToken,updateExpense);
router.delete("/deletexpense/:id",verifyToken,deleteExpense);
router.get("/getallexpense",verifyToken,isAdmin,getAllExpense)

export default router;