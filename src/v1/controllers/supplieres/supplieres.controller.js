import supplieres from "../../models/product.model"
export const listSupplieres = async (req, res) => {
    try {
        const data = await supplieres.find();
        res.json(data);
    } catch (error) {
        res.status(400).json({
            error: "Không có nhà cung cấp nào",
        })
    }
}
export const readSupplieres = async (req, res) => {
    const filter = { _id: req.params.id };
    const populate = req.query["_expand"];
    try {
        const supplieres = await supplieres.findOne(filter).select("-__v").populate(populate).exec();
        console.log("supplieres", supplieres);
        res.json(supplieres);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy nhà cung cấp",
            error,
        })
    }
}
export const addSupplieres = async (req, res) => {
    try {
        const suppliery = await supplieres(req.body).save();
        return res.json(suppliery);
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được nhà cung cấp",
        })
    }
}
export const removeSupplieres = async (req, res) => {
    try {
        const id = req.params.id;
        const suppliery = await supplieres.findOneAndDelete({ _id: id }).exec();
        res.json(suppliery);
    } catch (error) {
        res.status(400).json({
            error: "Không xóa được sản phẩm",
        })
    }
}

export const updateSupplieres = async (req, res) => {
    try {
        const suppliery = await supplieres.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        res.json(suppliery);
    } catch (error) {
        res.status(400).json({
            error: "Không cập nhật được nhà cung cấp",
        })
    }
}