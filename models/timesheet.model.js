import mongoose from 'mongoose';

const timesheetSchema = new mongoose.Schema({
    taskName: {
        type:String,
        required:true
    },
    startTime: {
        type:String,
        required:true
    },
    endTime: {
        type:String,
        required:true
    },
    duration: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
},{timestamps:true});

const Timesheet = mongoose.model("Timesheet",timesheetSchema);

export default Timesheet;