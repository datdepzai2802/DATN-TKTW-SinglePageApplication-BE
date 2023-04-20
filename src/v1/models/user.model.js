// import { boolean } from "joi";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
    minlength: 6,
  },
  avatar: {
    type: String,
    default: "https://i1.wp.com/i.imgur.com/a5rfZ9Q.jpg?resize=502%2C504&ssl=1",
  },
  phoneNumber: {
    type: Number,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  address: {
    type: String,
  },
  role: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("User", userSchema);
