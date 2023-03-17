import Publishing from "../../models/publishing";
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
        const product = await Publishing.findOne(filter).select("-__v").populate(populate).exec();
        console.log("product", product);
        res.json(product);
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
        const product = await Publishing(req.body).save();
        console.log("product");
        return res.json(product);
        console.log("product", product);
    } catch (error) {
        res.status(400).json({
            error: "Error: not create data",
        })
    }
}
export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Publishing.findOneAndDelete({ _id: id }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Error: not remove data",
        })
    }
}

export const update = async (req, res) => {
    try {
        const product = await Publishing.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Error: not update data",
        })
    }
}