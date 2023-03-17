
import mongoose from "mongoose";
const publishingSchema = mongoose.Schema({
    
    name: {
        type: String,
        unique: true,
    }
})
export default mongoose.model("publishing", publishingSchema)