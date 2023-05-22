import _ProductSeries from "../../models/product-series.model";
import _Product from "../../models/product.model";

export const list = async (req, res) => {
    try {
        const data = await _ProductSeries
            .find()
            .populate({ path: "categories" });
        return res.json({
            successCode: 200,
            data: data,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't list Product Series",
        });
    }
};
export const read = async (req, res) => {
    const filter = { _id: req.params.id };
    try {
        const productseries = await _ProductSeries
            .findOne(filter)
            .populate({ path: "categories" })
            .exec();
        if (!productseries) {
            return res.json({
                errorCode: 404,
                message: "Product Series is not valid",
            });
        }
        return res.json({
            successCode: 200,
            data: productseries,
            product,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't find Product Series",
        });
    }
};
export const add = async (req, res) => {
    try {
        const productseries = await _ProductSeries(req.body).save();
        console.log(productseries);
        return res.json({
            successCode: 200,
            data: productseries,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't add Product Series",
        });
    }
};
export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const productseries = await _ProductSeries
            .findOneAndDelete({ _id: id })
            .exec();
        return res.json({
            successCode: 200,
            data: productseries,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't delete Product Series",
        });
    }
};

export const update = async (req, res) => {
    try {
        const productseries = await _ProductSeries.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            {
                new: true,
            }
        );
        return res.json({
            successCode: 200,
            data: productseries,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't update Product Series",
        });
    }
};
