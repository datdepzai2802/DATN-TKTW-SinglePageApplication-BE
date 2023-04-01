import mongoose from "mongoose";
const voucherSchema = mongoose.Schema({
    voucherId:{
        type:String,
        unique: true
    },
    name:{
        type:String,
    },
    category:{
        type:String,
    },
    promotion:{
        type:Number,
    },
    apply:{
        type:String,
        unique: true
    }

})

export default mongoose.model("vouchers", voucherSchema)