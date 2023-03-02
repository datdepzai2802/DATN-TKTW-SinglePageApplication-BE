import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
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
  role: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("User", userSchema);
