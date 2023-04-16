import mongoose from "mongoose";
const { Schema } = mongoose;
const productSchema = Schema({
  view: {
    type: Number,
  },
  description: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  purchases: {
    type: String,
  },
  productImage: {
    type: Array,
  },
  previewImage: {
    type: Array,
  },
  sale: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  isHidden: {
    type: Boolean,
  },
  formbooks: {
    type: Schema.Types.ObjectId,
    ref: "formbooks",
  },
  categories: {
    type: Schema.Types.ObjectId,
    ref: "categories",
  },
  publishings: {
    type: Schema.Types.ObjectId,
    ref: "publishings",
  },
  authors: {
    type: Schema.Types.ObjectId,
    ref: "authors",
  },
  supplieres: {
    type: Schema.Types.ObjectId,
    ref: "supplieres",
  },
});
export default mongoose.model("Product", productSchema);
