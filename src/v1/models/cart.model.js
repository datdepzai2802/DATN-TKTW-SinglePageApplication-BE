import mongoose, { ObjectId } from "mongoose";

const cartSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  productImage: {
    type: Array,
  },
  quantity: {
    type: String,
  },
  userId: {
    type: String,
  },
});

export default mongoose.model("Cart", cartSchema);
