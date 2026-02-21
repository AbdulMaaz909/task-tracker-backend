import Salary from "../../models/salary.model.js";
import User from "../../models/user.model.js";

const createSalary = async (req, res) => {
  try {
    const { user, month, salary, bonus, deduction,role } = req.body;
    if (!month || salary === undefined || !role) {
      return res.status(400).json({ message: "role month salary are required" });
    }

    const checkExistingUser = await User.findById(user);
    if (!checkExistingUser) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const alreadyPaid = await Salary.findOne({ user, month });
    if (alreadyPaid) {
      return res.status(400).json({
        message: "Salary already give to this employee for this month",
      });
    }

    const newSalary = await Salary.create({
      user,
      month,
      salary: Number(salary),
      bonus: Number(bonus) || 0,
      deduction: Number(deduction) || 0,
      role
    });
    res
      .status(201)
      .json({ message: "Salary created sucessfully", data: newSalary });
  } catch (error) {
    console.error("Error while creating salary", error);
    return res
      .status(500)
      .json({ message: "Error while creating salary", error });
  }
};

const updateSalary = async (req, res) => {
  try {
    const { id } = req.params;
    const salaryDetails = req.body;

    const salary = await Salary.findById(id);
    if (!salary) {
      return res.status(404).json({ message: "Salary not found!" });
    }

    const updatedSalary = await Salary.findByIdAndUpdate(id, salaryDetails, {
      new: true,
      runValidators: true,
    });

    updatedSalary.netSalary = (updatedSalary.salary || 0) +
      (updatedSalary.bonus || 0) -
      (updatedSalary.deduction || 0);

    await updatedSalary.save();


    res
      .status(200)
      .json({ message: "Salary updated Sucessfully", data: updateSalary });
  } catch (error) {
    console.error("error while updating salary", error);
    res.status(500).json({ message: "Error while updating salary", error });
  }
};

const deleteSalary = async (req,res)=>{
  try {
    const {id} = req.params;
    const salary = await Salary.findById(id);

    if(!salary){
      res.status(404).json({message:"Salary not found!"});
    }

    await Salary.findByIdAndDelete(id);
    res.status(200).json({message:"Salary deleted Sucessfully!",
      data:salary
    })

  } catch (error) {
    console.error("Error while deleting salary",error);
    res.status(500).json({message:"Error while deleting salary",error});
  }
}

const getAllSalary = async(req,res)=>{
  try {
    const allSalary = await Salary.find();
    if(!allSalary){
      res.status(404).json({message:"Salary not found!"});
    };
    res.status(200).json({message:"Getting all salary sucessfully",
      data:allSalary
    });

  } catch (error) {
    console.error("Error while getting all salary");
    res.status(500).json({message:"Error while getting all salary",error});
  }
}

const getMySalary = async (req, res) => {
  try {
    const salary = await Salary.find({ user: req.user.id }).populate("user");

    res.status(200).json({
      message: "My salary fetched successfully",
      data: salary,
    });

  } catch (error) {
    res.status(500).json({
      message: "Error while fetching salary",
      error,
    });
  }
};


export { createSalary, updateSalary, deleteSalary,getAllSalary,getMySalary };


