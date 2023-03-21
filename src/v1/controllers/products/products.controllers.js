import Product from "../../models/product.model"
export const listProduct = async (req, res) => {
    try {
        const data = await Product.find();
        res.json(data);
    } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm nào",
        })
    }
}
export const readProduct = async (req, res) => {
    const filter = { _id: req.params.id };
    const populate = req.query["_expand"];
    try {
        const product = await Product.findOne(filter).select("-__v").populate(populate).exec();
        console.log("product", product);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy sản phẩm",
            error,
        })
    }
}
export const addProduct = async (req, res) => {
    try {
        console.log("product");
        const product = await Product(req.body).save();
        console.log("product");
        return res.json(product);
        console.log("product", product);
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được sản phẩm",
        })
    }
}
export const removeProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findOneAndDelete({ _id: id }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Không xóa được sản phẩm",
        })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Không cập nhật được sản phẩm",
        })
    }
}