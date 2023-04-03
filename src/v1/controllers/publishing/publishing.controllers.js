import _Publishing from "../../models/publishing.model";
export const list = async (req, res) => {
    try {
        const data = await _Publishing.find();
        return res.status(200).json(data);
    } catch (error) {
        res.status(400).json({
            error: "Can't find publishing",
        })
    }
}
export const read = async (req, res) => {
    const filter = { _id: req.params.id };
    const populate = req.query["_expand"];
    try {
        const publishing = await _Publishing.findOne(filter).select("-__v").populate(populate).exec();
        return res.status(200).json(publishing);
    } catch (error) {
        res.status(400).json({
            message: "Can't find publishing",
            error,
        })
    }
}
export const add = async (req, res) => {
    try {
        const publishing = await _Publishing(req.body).save();
        return res.status(200).json(publishing);
    } catch (error) {
        res.status(400).json({
            error: "Can't add publishing",
        })
    }
}
export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const publishing = await _Publishing.findOneAndDelete({ _id: id }).exec();
        return res.status(200).json(publishing);
    } catch (error) {
        res.status(400).json({
            error: "Can't delete publishing",
        })
    }
}

export const update = async (req, res) => {
    try {
        const publishing = await _Publishing.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        return res.status(200).json(publishing);
    } catch (error) {
        res.status(400).json({
            error: "Can't update publishing",
        })
    }
}