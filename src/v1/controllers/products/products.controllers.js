import _Product from "../../models/product.model"

export const listProduct = async (req, res) => {
    try {
        const data = (await _Product.find().limit(20));
        return res.status(200).json(data);
    } catch (error) {
        res.status(400).json({
            error: "Can't find product",
        })
    }
}
export const readProduct = async (req, res) => {
    const filter = { _id: req.params.id };
    try {
        const product = await _Product.findOne(filter).exec();
        return res.status(200).json(product);
    } catch (error) {
        res.status(400).json({
            message: "Can't find product",
            error,
        })
    }
}

export const addProduct = async (req, res) => {
    try {
        const product = await _Product(req.body).save();
        return res.status(200).json(product);
    } catch (error) {
        res.status(400).json({
            error: "Can't add product",
        })
    }
}

export const removeProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await _Product.findOneAndDelete({ _id: id }).exec();
        return res.status(200).json(product);
    } catch (error) {
        res.status(400).json({
            error: "Can't delete product",
        })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const product = await _Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        return res.status(200).json(product);
    } catch (error) {
        res.status(400).json({
            error: "Can't update product",
        })
    }
}