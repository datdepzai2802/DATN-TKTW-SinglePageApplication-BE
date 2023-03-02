import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
    }
});

export default mongoose.model("Categories", categorySchema);