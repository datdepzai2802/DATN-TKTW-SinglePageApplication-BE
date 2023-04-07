  import mongoose, { ObjectId } from "mongoose";

  const productSchema = mongoose.Schema({
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
    categorieId: {
      type: String,
    },
    publishingHousId: {
      type: ObjectId,
      ref: "Publishing",
    },
    formBookId: {
      type: ObjectId,
      ref: "Formbook",
    },
    authorId: {
      type: ObjectId,
      ref: "Author",
    },
    supplieresId: {
      type: ObjectId,
      ref: "Supplieres",
    },
  });
  export default mongoose.model("Product", productSchema);
