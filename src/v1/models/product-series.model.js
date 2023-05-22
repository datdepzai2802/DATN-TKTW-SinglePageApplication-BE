import mongoose from "mongoose";

const productSeriesSchema = mongoose.Schema({
    name: {
        type: String,
    },
    image: {
        type: Array,
    },
    author: {
        type: String,
    },
    publishing: {
        type: String,
    },
    categories: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "categories",
    },
});

export default mongoose.model("productSeries", productSeriesSchema);
