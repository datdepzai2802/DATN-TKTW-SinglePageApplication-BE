import mongoose from "mongoose";
const { Schema } = mongoose;
const infomationPageSchema = Schema({
    title: {
        type: String,
    },
    html: {
        type: String,
    },
    isHidden: {
        type: Boolean,
        default: false,
    },
    categoryInfor: {
        type: [Schema.Types.ObjectId],
        ref: "categoryInformation",
    },
});

export default mongoose.model("infomationPage", infomationPageSchema);
