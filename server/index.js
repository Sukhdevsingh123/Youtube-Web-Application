import express from "express"
import mongoose from "mongoose";
import userRoutes from './routes/users.js'
import videoRoutes from './routes/video.js'
import commentRoutes from './routes/comment.js'
import authRoutes from './routes/auth.js'
import cookieParser from "cookie-parser";


const app=express();


main().then(()=>{ console.log("db connected successfully")}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Youtube');

}
app.use(cookieParser())
app.use(express.json())
app.use("/api/users",userRoutes);
app.use("/api/videos",videoRoutes);
app.use("/api/comments",commentRoutes);
app.use("/api/auth",authRoutes);


app.use((err,req,res,next)=>{
  const status=err.status || 500;
  const message=err.message || "something went wrong";
  return res.status(status).json({
    success:false,
    status,
    message
  })
})

app.get("/",(req,res)=>{
  res.send("i am root")
})

app.listen(8800,()=>{
    console.log("connected");
})