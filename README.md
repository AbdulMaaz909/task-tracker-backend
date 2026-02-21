# Task Tracker Backend

## Overview
This project is a Node.js/Express backend for a Task Tracker application. It provides RESTful APIs for user authentication, task management, expense tracking, salary management, memo notes, timesheet logging, and chatbot integration. The backend uses MongoDB for data storage and JWT for authentication.

---

## Features

### 1. **User Authentication & Authorization**
- **Register & Login**: Users can register and log in with email and password.
- **Roles**: Supports `user` and `admin` roles.
- **JWT Auth**: Secured endpoints using JWT tokens.
- **Admin Middleware**: Restricts certain actions to admins only.

### 2. **Task Management**
- **Create Task**: Admins can assign tasks to users.
- **View Tasks**: Admins can view all tasks; users can view their own tasks.
- **Update Task**: Update task status (admin can update any, users only their own).
- **Delete Task**: Remove tasks.

### 3. **Expense Tracking**
- **Create Expense**: Users can log expenses.
- **Update/Delete Expense**: Users can update or delete their expenses.
- **Admin View**: Admins can view all expenses.
- **Status**: Expenses have statuses (Approved, Rejected, Pending).

### 4. **Salary Management**
- **Create Salary**: Admins can assign salary details to users for each month.
- **Update/Delete Salary**: Admins can update or delete salary records.
- **View Salary**: Users can view their own salary; admins can view all.
- **Net Salary Calculation**: Auto-calculates net salary (salary + bonus - deduction).

### 5. **Memo Notes**
- **Create Memo**: Users can create personal memos/notes.
- **Update/Delete Memo**: Users can update or delete their memos.
- **View Memo**: Users can view their memos.

### 6. **Timesheet Logging**
- **Add Timesheet**: Users can log work sessions (task name, start/end time, duration, description, date).
- **Update/Delete Timesheet**: Users can update or delete their timesheets.
- **Admin View**: Admins can view all timesheets.

### 7. **Chatbot Integration**
- **Gemini API**: (Planned/Stub) Integration with Gemini AI for chatbot features.

---

## Project Structure

- `server.js` — Main entry point, sets up Express, routes, DB connection.
- `config/db.js` — MongoDB connection logic.
- `models/` — Mongoose schemas for User, Task, Expense, Salary, Memo, Timesheet.
- `controllers/` — Business logic for each resource.
- `routes/` — Express routers for each resource.
- `middleware/` — Auth and admin middleware.

---

## API Endpoints

### Auth
- `POST /api/auth/register` — Register new user
- `POST /api/auth/login` — Login
- `GET /api/auth/users` — List all users (admin only)

### Tasks
- `POST /api/createtask` — Create task (admin only)
- `GET /api/getalltasks` — Get all tasks (admin only)
- `GET /api/getmytask` — Get tasks for logged-in user
- `PATCH /api/updatetask/:id` — Update task status
- `DELETE /api/deletetask/:id` — Delete task

### Expenses
- `POST /api/createexpense` — Create expense
- `PUT /api/updateexpense/:id` — Update expense
- `DELETE /api/deletexpense/:id` — Delete expense
- `GET /api/getallexpense` — Get all expenses (admin only)

### Salary
- `POST /api/createsalary` — Create salary (admin only)
- `PUT /api/updatesalary/:id` — Update salary (admin only)
- `DELETE /api/deletesalary/:id` — Delete salary (admin only)
- `GET /api/getallsalary` — Get all salaries (admin only)
- `GET /api/mysalary` — Get salary for logged-in user

### Memo
- `POST /api/creatememo` — Create memo
- `GET /api/getmemo` — Get memos for user
- `PUT /api/updatememo/:id` — Update memo
- `DELETE /api/deletememo/:id` — Delete memo

### Timesheet
- `POST /api/addtimesheet` — Add timesheet
- `PUT /api/updatetimesheet/:id` — Update timesheet
- `DELETE /api/deletetimesheet/:id` — Delete timesheet
- `GET /api/getalltimesheets` — Get all timesheets (admin only)

### Chatbot
- `POST /api/chat` — Chat with Gemini (stub)

---

## Technologies Used
- Node.js, Express.js
- MongoDB, Mongoose
- JWT (jsonwebtoken)
- bcryptjs (password hashing)
- dotenv (env config)
- CORS
- Axios (for chatbot API)

---

## Setup Instructions

1. **Clone the repository**
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Configure environment variables**
   - Create a `.env` file in the root directory:
     - `PORT=5000`
     - `MONGODB_URI=your_mongodb_connection_string`
     - `JWT_SECRET=your_jwt_secret`
     - `GEMINI_API_KEY=your_gemini_api_key` (for chatbot)
4. **Run the server**
   - For development (with nodemon):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

---

## What You Can Implement Next
- **Chatbot Functionality**: Complete the Gemini chatbot integration.
- **User Profile Management**: Add endpoints for updating user info.
- **Notifications**: Email or in-app notifications for task assignments, salary updates, etc.
- **Reporting & Analytics**: Generate reports for admin (expenses, tasks, timesheets).
- **Unit & Integration Tests**: Add tests for all endpoints.
- **API Documentation**: Swagger/OpenAPI docs.
- **Frontend Integration**: Build a frontend (React, Angular, etc.) to consume these APIs.

---

## License
This project is licensed under the ISC License.
