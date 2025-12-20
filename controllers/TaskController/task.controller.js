import Task from "../../models/task.model.js"
import User from "../../models/user.model.js"

const createTask = async (req, res) => {
  try {
    // Check if logged-in user is admin
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Only admin can assign tasks" });
    }

    const { title, description, status, userId } = req.body;

    // Verify the user to whom task is being assigned exists
    const assignedUser = await User.findById(userId);
    if (!assignedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const task = await Task.create({
      title,
      description,
      status,
      user: userId,
    });

    res.status(201).json({ message: "Task created successfully", task });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ➤ Get all tasks (admin can see all)
const getAllTasks = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Only admin can view all tasks" });
    }
    const tasks = await Task.find().populate("user", "name email");
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ➤ Get tasks for logged-in user (for regular users)
const getMyTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ➤ Update task status (admin can update any, user can update only own)
const updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    // Admin can update any task
    // User can only update their own task
    if (req.user.role !== "admin" && task.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    task.status = status;
    await task.save();

    res.json({ message: "Task updated successfully", task });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const deleteTask = async (req,res) =>{
  try {
    const { id } = req.params;

    const deleteTask = Task.findByIdAndDelete(id);
    if(!deleteTask){
      return res.status(404).json({message:'Task not found'});
      
    }
    res.status(200).json({message:'task deleted succesfully'}),
    deleteTask;
  } catch (error) {
    res.status(500).json({message:'Server error', error:error.message});    
  }
}

export {
    createTask,
    getAllTasks,
    getMyTasks,
    updateTaskStatus,
    deleteTask
};