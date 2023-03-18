import mongoose from "mongoose";

const formbookSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
    }
});

export default mongoose.model("Formbook", formbookSchema);