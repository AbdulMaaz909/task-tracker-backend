import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import registerRoute from "./routes/register.route.js"
import loginRoute from "./routes/login.route.js"




dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", registerRoute);
app.use("/api/auth",loginRoute)



const PORT = process.env.PORT || 5000;
connectDB()

// test route
app.get("/", (req, res) => {
  res.send("Backend server running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

