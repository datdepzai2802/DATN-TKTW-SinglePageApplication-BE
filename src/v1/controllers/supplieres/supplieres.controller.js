import _Supplieres from "../../models/product.model"
export const listSupplieres = async (req, res) => {
    try {
        const data = await _Supplieres.find();
        return res.status(200).json(data);
    } catch (error) {
        res.status(400).json({
            error: "Can't find supplieres",
        })
    }
}
export const readSupplieres = async (req, res) => {
    const filter = { _id: req.params.id };
    const populate = req.query["_expand"];
    try {
        const supplieres = await _Supplieres.findOne(filter).select("-__v").populate(populate).exec();
        console.log("supplieres", supplieres);
        return res.status(200).json(supplieres);
    } catch (error) {
        res.status(400).json({
            error: "Can't find supplieres"
        })
    }
}
export const addSupplieres = async (req, res) => {
    try {
        const suppliery = await _Supplieres(req.body).save();
        return res.status(200).json(suppliery);
    } catch (error) {
        res.status(400).json({
            error: "Can't add supplieres"
        })
    }
}
export const removeSupplieres = async (req, res) => {
    try {
        const id = req.params.id;
        const suppliery = await _Supplieres.findOneAndDelete({ _id: id }).exec();
        return res.status(200).json(suppliery);
    } catch (error) {
        res.status(400).json({
            error: "Can't delete supplieres",
        })
    }
}

export const updateSupplieres = async (req, res) => {
    try {
        const suppliery = await _Supplieres.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        return res.status(200).json(suppliery);
    } catch (error) {
        res.status(400).json({
            error: "Can't update supplieres",
        })
    }
}