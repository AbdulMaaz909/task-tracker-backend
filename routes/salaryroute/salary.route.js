import express from 'express'
import {createSalary, deleteSalary, getAllSalary, getMySalary, updateSalary,} from '../../controllers/SalaryController/salary.controller.js';
import isAdmin from '../../middleware/AdminMiddleware.js/admin.middleware.js';
import verifyToken from '../../middleware/AuthMiddleware/auth.middleware.js';
const router = express.Router();

router.post('/createsalary',verifyToken,isAdmin,createSalary)
router.put('/updatesalary/:id',verifyToken,isAdmin,updateSalary)
router.delete('/deletesalary/:id',verifyToken,isAdmin,deleteSalary)
router.get('/getallsalary',verifyToken,isAdmin,getAllSalary);
router.get("/mysalary", verifyToken, getMySalary);

export default router;