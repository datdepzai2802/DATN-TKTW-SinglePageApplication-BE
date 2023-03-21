
import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    view: {
        type: String,
        unique: true,
    },
    description: {
        type: String,
        unique: true,
    },
    price: {
        type: Number,
        unique: true,
    }
})
export default mongoose.model("products", productSchema)