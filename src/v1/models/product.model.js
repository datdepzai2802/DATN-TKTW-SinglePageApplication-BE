
import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    image: {
        type: String,
        unique: true,
    },
    description: {
        type: String,
        unique: true,
    },
    shorDescription: {

        type: String,
        unique: true,
    },
    price: {
        type: Number,
        unique: true,
    },
    saleoffPrice: {
        type: Number,
        unique: true
    },
    categoryid: {
        type: Number,
        unique: true
    }
})
export default mongoose.model("products", productSchema)