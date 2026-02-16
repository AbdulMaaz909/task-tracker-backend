import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
    date:{
        type:Date,
        required:true,
    },
    amount:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Approved","Rejected","Pending"],
        default:"Pending",
    },
        user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true})

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
/*
{
      id: 1,
      employee: "Rahul Sharma",
      date: "2026-02-08",
      category: "Travel",
      amount: 1200,
      description: "Client meeting travel expense",
      status: "Approved",
    },
    */