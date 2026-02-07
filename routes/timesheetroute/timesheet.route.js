import express from 'express';
import {TimeSheet,deleteTimeSheet, updateTimeSheet} from '../../controllers/TimesheetController/timesheet.controller.js';


const router = express.Router();
router.post('/addtimesheet',TimeSheet);
router.put('/updatetimesheet/:id',updateTimeSheet);
router.delete('/deletetimesheet/:id',deleteTimeSheet)


export default router;