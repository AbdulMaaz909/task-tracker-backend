import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Authrouter from "./routes/authroute/auth.route.js";
import ChatbotRoute from "./routes/chatbot.route/chatbot.route.js"

import TaskRoute from "./routes/taskroute/task.route.js"
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", Authrouter);
app.use("/api",ChatbotRoute)

app.use("/api",TaskRoute)


const PORT = process.env.PORT || 5000;
connectDB()

// test route
app.get("/", (req, res) => {
  res.send("Backend server running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

