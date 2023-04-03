import mongoose from "mongoose";

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
    images: {
        type: Array,
    },
    sale: {
        type: Number,
    },
    categories_id: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    isHidden: {
        type: Boolean,
    },
    publishing_hous_id: {
        type: ObjectId,
        ref: "Publishing",
    },
    form_book_id: {
        type: ObjectId,
        ref: "Formbook",
    },
    author_id: {
        type: ObjectId,
        ref: "Author",
    },

})
export default mongoose.model("Product", productSchema)