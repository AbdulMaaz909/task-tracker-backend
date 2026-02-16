import Expense from "../../models/expenses.model.js";

const createExpense = async (req, res) => {
  try {
    const { amount, description, date } = req.body;
    if (!amount || !description) {
      return res.status(400).json({ message: "All feilds are required!" });
    }
    const expense = await Expense.create({
      amount,
      description,
      date,
      user: req.user.id 
    });
    res
      .status(200)
      .json({ message: "Expense created Sucessfully!", data: expense });
  } catch (error) {
    console.error("error while creating expense", error);
    res.status(500).json({ message: error.message });
  }
};

const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const expenseDetails = req.body;

    const expense = await Expense.findById(id);
    if (!expense) {
      return res.status(404).json({ message: "Expense Not found!" });
    }

    const updatedExpense = await Expense.findByIdAndUpdate(id, expenseDetails, {
      new: true,
    });

    res
      .status(200)
      .json({ message: "Expense Updated Sucessfully!", data: updatedExpense });
  } catch (error) {
    console.error("Error while updating Expense", error);
    res.status(500).json({ message: error.message });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const expense = await Expense.findById(id);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    await Expense.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Expense deleted Sucessfully!", data: expense });
  } catch (error) {
    console.error("error while delete expense", error);
    res.status(500).json({ message: error.message });
  }
};

//Admin Controller
const getAllExpense = async (req, res) => {
  try {
    const allExpense = await Expense.find().populate("user","name email");
    res.json(allExpense);
  } catch (error) {
    console.error("error while getting expense!", error);
    res.status(500).json({ message: error.message });
  }
};

export { createExpense, updateExpense, deleteExpense, getAllExpense };
