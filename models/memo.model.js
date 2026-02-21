import mongoose from 'mongoose';

const memoSchema = new mongoose.Schema({
    note:{
        type:String,
        required:true
    },
    date:{
        type:Date,
    },
    user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
        },
},{timeStamp:true});


const Memo = mongoose.model("memo",memoSchema);

export default Memo;
