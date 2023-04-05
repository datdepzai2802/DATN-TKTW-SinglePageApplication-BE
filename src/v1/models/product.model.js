import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  view: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
});
export default mongoose.model("Product", productSchema);
