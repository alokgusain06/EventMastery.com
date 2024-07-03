import express from "express";
import {connectdb}  from "./mongodb/connectdb.js";
import dotenv from "dotenv";
import userRouter from "./router/userRouter.js";
import cors from "cors"


const app=express();

dotenv.config({path:"./config/config.env"});
app.use(
  cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["POST"],
  credentials: true,
})
);


app.use(express.json());//middleware
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
  res.json({
    success:true,
    message: "successesfull!!",
  });
});
app.use("/api/v1/message", userRouter);
 connectdb();


export default app;
