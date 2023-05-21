
import mongoose, { ObjectId } from "mongoose";

const bannerSchema = mongoose.Schema({
  image: {
    type: Array,
  },
  link: {
    type: String,
  },
  isHidden: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Banner", bannerSchema);
