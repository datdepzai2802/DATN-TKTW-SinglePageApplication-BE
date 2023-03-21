
import mongoose from "mongoose";
const publishingSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    phone: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    address: {
        type: String,
        unique: true,
    }
})
export default mongoose.model("publishing", publishingSchema)