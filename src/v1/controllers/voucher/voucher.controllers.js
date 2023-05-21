import _Voucher from "../../models/voucher.model";
export const list = async (req, res) => {
    try {
        const data = await _Voucher.find().populate({ path: "user" });
        return res.json({
            successCode: 200,
            data: data,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't list voucher",
        });
    }
};
export const read = async (req, res) => {
    const filter = req.params.id;
    console.log(filter);
    try {
        const data = await _Voucher
            .findOne({ _id: filter })
            .populate({ path: "user" })
            .exec();

        if (!data) {
            return res.json({
                errorCode: 404,
                message: "Voucher is not valid",
            });
        }
        return res.json({
            successCode: 200,
            data,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't find voucher",
        });
    }
};
export const add = async (req, res) => {
    try {
        const { code } = req.body;
        const exitVoucher = await _Voucher.find({ code });
        if (!exitVoucher) {
            return res.json({
                successCode: 400,
                message: "Voucher exit",
            });
        }
        const voucher = new _Voucher(req.body);
        const result = await _Voucher(voucher).save();
        if (!result) {
            return res.json({
                successCode: 401,
                message: "Add voucher false",
            });
        }

        const data = await _Voucher.find().populate({ path: "user" });
        return res.json({
            successCode: 200,
            data,
        });
    } catch (error) {
        console.log(error);
        return res.json({
            errorCode: 400,
            message: "Can't add voucher",
        });
    }
};
export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const voucher = await _Voucher.findOneAndDelete({ _id: id }).exec();
        const data = await _Voucher.find().populate({ path: "user" });
        return res.json({
            successCode: 200,
            voucher,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't delete voucher",
        });
    }
};

export const update = async (req, res) => {
    try {
        const voucher = await _Voucher.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        const data = await _Voucher.find().populate({ path: "user" });
        return res.json({
            successCode: 200,
            data: voucher,
        });
    } catch (error) {
        console.log(error);
        return res.json({
            errorCode: 400,
            message: "Can't update voucher",
        });
    }
};
