const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymemntSchema = new Schema({
  code: {
    type: String,
  },
});

module.exports = mongoose.model("Payment", paymemntSchema);
