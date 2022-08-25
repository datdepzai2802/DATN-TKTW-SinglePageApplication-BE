import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("product", ProductSchema);
