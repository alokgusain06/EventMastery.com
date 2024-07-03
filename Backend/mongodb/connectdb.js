 import mongoose from "mongoose";

export const connectdb =()=>{
  mongoose.connect(process.env.MONGO_URI,{ dbName: "message_Event" }).then(()=>{
  console.log("Connected to mongodb!")
}).catch(err=>{
  console.log("some error occured!!!",err)
});
};