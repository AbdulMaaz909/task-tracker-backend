import express from 'express';
import {TimeSheet,deleteTimeSheet, updateTimeSheet,getTimeSheetUsers} from '../../controllers/TimesheetController/timesheet.controller.js';
import verifyToken from '../../middleware/AuthMiddleware/auth.middleware.js';
import isAdmin from '../../middleware/AdminMiddleware.js/admin.middleware.js';


const router = express.Router();
router.post('/addtimesheet',verifyToken,TimeSheet);
router.put('/updatetimesheet/:id',updateTimeSheet);
router.delete('/deletetimesheet/:id',deleteTimeSheet);

//Admin Routes!
router.get('/getalltimesheets',verifyToken,isAdmin,getTimeSheetUsers);

export default router;