import bcrypt from "bcryptjs";
import User from "../../models/user.model.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import { sendEmail } from "../../config/mailConfig.js";


// REGISTER USER
const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // 1. Check if all fields are filled
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 3. Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role
    });

    await newUser.save();

    try {
      await sendEmail(
        email,
        "Welcome to Task Tracker 🎉",
        `
        <h2>Welcome, ${name} 👋</h2>
        <p>Your account has been created successfully.</p>
        <p>Start managing your tasks now 🚀</p>
        <br/>
        <p>– Task Tracker Team</p>
        `
      )
    } catch (emailError) {
      console.log("Email failed but user registered:", emailError.message);
    }

    // 5. Respond success
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role }, // 👈 add role in token
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role, // 👈 return role here
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


const getAllUser = async (req,res) =>{
  try{
    const users = await User.find({},"_id name email role");
    res.json(users);
  }catch(error){
    console.error("Error fetching users:", error);
    res.status(500).json({message: "Server error while fetching users"})
  }
};


export { registerUser, loginUser ,getAllUser};
