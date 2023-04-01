
import mongoose from "mongoose";
const supplieresSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        unique: true,
    },
    phone: {
        type: string,
        unique: true,
    },
    email: {
     type: string,
     unique: true,
     },
    address: {
     type: string,
     unique: true,
     }
})
export default mongoose.model("supplieres", supplieresSchema)