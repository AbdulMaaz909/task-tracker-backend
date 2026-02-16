import Timesheet from "../../models/timesheet.model.js";

const TimeSheet = async (req, res) => {
  try {
    const { taskName, startTime, endTime, duration, description,date } = req.body;
    if (!taskName || !startTime || !endTime || !duration || !description || !date) {
      return res.status(400).json({ message: "All feilds are required!" });
    }

    const createTimesheet = await Timesheet.create({
      taskName,
      startTime,
      endTime,
      duration,
      description,
      date,
      user:req.user.id
    });

    res
      .status(200)
      .json({
        message: "Time Sheet created successfully!",
        data: createTimesheet,
      });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

const updateTimeSheet = async (req, res) => {
  try {
    const { id } = req.params;
    const timesheetdetails = req.body;

    const timesheet = await Timesheet.findById(id);
    if (!timesheet) {
      return res.status(404).json({ message: "Timesheet not found" });
    }

    const updatedTimesheet = await Timesheet.findByIdAndUpdate(
      id,
      timesheetdetails,
      { new: true }
    );

    res.status(200).json({
      message: "TimeSheet update sucessfully",
      date: updatedTimesheet,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

const deleteTimeSheet = async (req, res) => {
  try {
    const { id } = req.params;

    const timesheet = await Timesheet.findById(id);

    if (!timesheet) {
      return res.status(404).json({ message: "Timesheet not found!" });
    }

    await Timesheet.findByIdAndDelete(id);

    res
      .status(200)
      .json({ message: "timeSheet delete successfully!", data: timesheet });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getTimeSheetUsers = async (req,res) => {
  try {
    const timeSheets = await Timesheet.find().populate("user","name email");
    res.json(timeSheets);
    
  } catch (error) {
    console.error(error); 
    res.status(500).json({message: error.message});
  }
}

export { TimeSheet, updateTimeSheet, deleteTimeSheet,getTimeSheetUsers };
