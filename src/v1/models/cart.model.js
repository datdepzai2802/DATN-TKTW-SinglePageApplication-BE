import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
    min: 1,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model("Cart", cartSchema);
