import mongoose from "mongoose";

const categoryInformationPageSchema = mongoose.Schema({
    name: {
        type: String,
    },
    location: {
        type: String,
    },
});

export default mongoose.model(
    "categoryInformation",
    categoryInformationPageSchema
);
