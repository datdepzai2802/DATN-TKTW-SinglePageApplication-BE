const mongoose = require("mongoose");
const { Schema } = mongoose;

const reportSchema = new Schema({
  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment",
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  reporter: {
    type: [Schema.Types.ObjectId],
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Report", reportSchema);
