import Voucher from "../../models/voucher.model";
export const list = async (req, res) => {
    try {
        const data = await Voucher.find();
        res.json(data);
    } catch (error) {
        res.status(400).json({
            error: "Error: Voucher does not data",
        })
    }
}
export const read = async (req, res) => {
    const filter = {voucherId: req.params.voucherId };
    const populate = req.query["_expand"];
    try {
        const voucher = await Voucher.findOne(filter).select("-__v").populate(populate).exec();
        console.log("voucher", voucher);
        res.json(voucher);
    } catch (error) {
        res.status(400).json({
            message: "Error: Voucher does not exist",
            error,
        })
    }
}
export const add = async (req, res) => {
    try {
        console.log("product");
        const voucher = await Voucher(req.body).save();
        console.log("voucher");
        return res.json(voucher);
        console.log("voucher", voucher);
    } catch (error) {
        res.status(400).json({
            error: "Error: not create voucher",
        })
    }
}
export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const voucher = await Voucher.findOneAndDelete({ _id: id }).exec();
        res.json(voucher);
    } catch (error) {
        res.status(400).json({
            error: "Error: not remove voucher",
        })
    }
}

export const update = async (req, res) => {
    try {
        const voucher = await Voucher.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        res.json(voucher);
    } catch (error) {
        res.status(400).json({
            error: "Error: not update data",
        })
    }
}