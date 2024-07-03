import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required: [true, "Your name is required"],
    minLength: [3, "A valid name requires at least 3 characters!"]
  },
  email:{
    type:String,
    required: [true, "Your Email is required"],
    validate: [validator.isEmail, "Please Provide Valid Email!"]
  },
  subject:{
    type:String,
    required: [true, "Subject required"],
    minLength: [5, "Subject requires at least 5 characters"]
  },
  message:{
    type:String,
    required: [true, "message required"],
    minLength: [10, "A valid message requires at least 10 characters"]
  },
});

export const Message = mongoose.model("Message",userSchema);