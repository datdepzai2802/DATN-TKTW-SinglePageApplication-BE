import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    image: {
        type: String,
        unique: true,
    },
    icon: {
        type: String,
        unique: true,
    },
    baner: {
        type: String,
        unique: true,
    }
});

export default mongoose.model("Categories", categorySchema);