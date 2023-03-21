import Publishing from "../../models/publishing.model";
export const list = async (req, res) => {
    try {
        const data = await Publishing.find();

        res.json(data);
    } catch (error) {
        res.status(400).json({
            error: "Error: not data",
        })
    }
}
export const read = async (req, res) => {
    const filter = { _id: req.params.id };
    const populate = req.query["_expand"];
    try {
        const publishing = await Publishing.findOne(filter).select("-__v").populate(populate).exec();
        console.log("publishing", publishing);
        res.json(publishing);
    } catch (error) {
        res.status(400).json({
            message: "Error: not data",
            error,
        })
    }
}
export const add = async (req, res) => {
    try {
        console.log("product");
        const publishing = await Publishing(req.body).save();
        console.log("publishing");
        return res.json(publishing);
        console.log("publishing", publishing);
    } catch (error) {
        res.status(400).json({
            error: "Error: not create data",
        })
    }
}
export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const publishing = await Publishing.findOneAndDelete({ _id: id }).exec();
        res.json(publishing);
    } catch (error) {
        res.status(400).json({
            error: "Error: not remove data",
        })
    }
}

export const update = async (req, res) => {
    try {
        const publishing = await Publishing.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        res.json(publishing);
    } catch (error) {
        res.status(400).json({
            error: "Error: not update data",
        })
    }
}