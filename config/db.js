import mongoose from "mongoose";



const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1); // stop process if fail
  }
};

export default connectDB;


// mongoose.connect(process.env.MONGO_URL,{
//   useNewUrlParser : true,
//   useUnifiedToplogy : true,
// });
// console.log("mongodb connection successfully");



