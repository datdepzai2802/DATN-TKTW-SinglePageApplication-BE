import _Categories from "../../models/categories.model";
import _Product from "../../models/product.model";
import _ProductSeries from "../../models/product-series.model";

export const listCategory = async (req, res) => {
    try {
        const category = await _Categories.find();

        return res.json({
            successCode: 200,
            data: category,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't list category",
        });
    }
};

export const readCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await _Categories.findOne({ _id: id });
        const product = await _Product
            .find({ categories: category })
            .select("-product")
            .exec();
        const series = await _ProductSeries
            .find({
                categories: category,
            })
            .select("-product-series")
            .exec();
        if (!category) {
            return res.json({
                errorCode: 404,
                message: "Category is not valid",
            });
        }
        return res.json({
            successCode: 200,
            data: category,
            product,
            series,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't find category",
        });
    }
};

export const addCategory = async (req, res) => {
    try {
        const category = await new _Categories(req.body).save();
        return res.json({
            successCode: 200,
            data: category,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't add category",
        });
    }
};

export const updateCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const category = await _Categories.findOneAndUpdate({ _id: id }, body, {
            new: true,
        });
        return res.json({
            successCode: 200,
            data: category,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't update category",
        });
    }
};

export const removeCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await _Categories.findOneAndRemove({ _id: id });
        return res.json({
            successCode: 200,
            data: category,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't delete category",
        });
    }
};
