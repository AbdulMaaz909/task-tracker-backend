import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Authrouter from "./routes/authroute/auth.route.js";
import ChatbotRoute from "./routes/chatbot.route/chatbot.route.js"
import TimeSheet from "./routes/timesheetroute/timesheet.route.js";
import TaskRoute from "./routes/taskroute/task.route.js";
import ExpenseRoute from "./routes/expenseroute/expense.route.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
connectDB()

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", Authrouter);
app.use("/api",ChatbotRoute)

app.use("/api",TaskRoute)
//Add time sheet route User
app.use("/api",TimeSheet);

app.use("/api",ExpenseRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

