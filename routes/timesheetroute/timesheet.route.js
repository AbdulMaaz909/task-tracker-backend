import express from 'express';
import {TimeSheet,deleteTimeSheet} from '../../controllers/TimesheetController/timesheet.controller.js';


const router = express.Router();
router.post('/timesheet',TimeSheet);
router.delete('/deletetimesheet/:id',deleteTimeSheet)


export default router;