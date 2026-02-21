import mongoose from 'mongoose'

const salarySchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    month:{
        type:String,
        required:true,
        enum:["January","February","March","April","May","June",
      "July","August","September","October","November","December"]
    },
    role:{
        type:String,
        required:true,
        enum:["Frontend developer","Backend developer", "Full Stack developer","MERN Stack developer"]
    },
    salary:{
        type:Number,
        required:true,
        min:0
    },
    bonus:{
        type:Number,
        default:0,
        min:0
    },
    deduction:{
        type:Number,
        default:0,
        min:0
    },
    netSalary:{
        type:Number
    }
},{timestamps:true})

salarySchema.index({user:1,month:1,year:1},{unique:true});

salarySchema.pre('save',function (next) {
    this.netSalary = this.salary + this.bonus - this.deduction;
    next();
})

const Salary = mongoose.model("Salary",salarySchema);

export default Salary;