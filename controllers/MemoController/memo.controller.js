import express from "express";
import Memo from "../../models/memo.model.js";
import User from "../../models/user.model.js";

const createMemo = async (req,res) => {
    try {
        const {note,date} = req.body;
        if(!note){
            res.status(400).json({message:"note are required!"});
        };
        
        const user = req.user.id; 

        const craetedmemo = await Memo.create({
            note,
            date,
            user
        });
        res.status(200).json({message:"memo created sucessfully!",
            data:craetedmemo
        })
    } catch (error) {
        console.log("error while creating memo",error);
        res.status(500).json({message:"error while creating memo",error})
    }
}

const updateMemo = async (req, res) => {
  try {
    const { id } = req.params;
    const { note, date } = req.body;

    const memo = await Memo.findById(id);

    if (!memo) {
      return res.status(404).json({
        message: "Memo not found!",
      });
    }

    memo.note = note || memo.note;
    memo.date = date || memo.date;

    const updatedMemo = await memo.save();

    res.status(200).json({
      message: "Memo updated successfully!",
      data: updatedMemo,
    });

  } catch (error) {
    console.log("Error while updating memo", error);
    res.status(500).json({
      message: "Error while updating memo",
      error,
    });
  }
};

const deleteMemo = async (req, res) => {
  try {
    const { id } = req.params;

    const memo = await Memo.findById(id);

    if (!memo) {
      return res.status(404).json({
        message: "Memo not found!",
      });
    }

    await Memo.findByIdAndDelete(id);

    res.status(200).json({
      message: "Memo deleted successfully!",
    });

  } catch (error) {
    console.log("Error while deleting memo", error);
    res.status(500).json({
      message: "Error while deleting memo",
      error,
    });
  }
};


const getMemo = async (req, res) => {
  try {
    const memos = await Memo.find()
      .populate("user", "name email"); // 👈 only get name & email

    res.status(200).json({
      message: "Memos fetched successfully",
      data: memos,
    });

  } catch (error) {
    console.log("Error fetching memos", error);
    res.status(500).json({
      message: "Error fetching memos",
      error,
    });
  }
};

export {
    createMemo,
    getMemo,
    deleteMemo,
    updateMemo
}