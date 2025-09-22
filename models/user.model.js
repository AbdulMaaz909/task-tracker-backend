import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true //compalsary
    },
    email:{
        type: String,
        required: true,
        unique:true //email must be unique
    },
    password:{
        type:String,
        required: true
    },
    role:{
        type: String,
        enum: ["user","admin"],
    },
},{timestamps:true}  // createdAt, updatedAt auto add ho jayega
)

const User = mongoose.model("User", userSchema);

export default User;