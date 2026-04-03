let arr = [14,286,287,6588,6854];
let max = 0;
let sec= 0;
let third = 0
for(let i = 0 ;i<arr.length; i++){
    if(arr[i]>max){
        third = sec;
        sec = max
        max = arr[i]
    }else if(arr[i] > sec && arr[i] !== max){
    }
}
console.log(third);

import bcrypt from "bcryptjs";
import User from "./models/user.model";
const userLogin = async (req,res) =>{
    const {username, password} = req.body();
    
    if(!username || !password){
        return res.status(400).json({message:"All feilds are required!"});
    };

    const UserExist = await User.findOne({email});
    if(!UserExist){
        return res.status(400).json({message:"All feilds are required!"});
    }

    const hashPassword = await bcrypt.compare(password,user.password);
}

export default userLogin;