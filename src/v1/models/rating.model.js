import mongoose from "mongoose";
const ratingSchema = mongoose.Schema({
    like: {
        type: Number,
        unique: true,
    },
    disLike: {
     type: Number,
     unique: true,
    }
});

export default mongoose.model("Rating", ratingSchema);