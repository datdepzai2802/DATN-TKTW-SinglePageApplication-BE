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

export const searchPro = async (req, res) => {
    try {
        let objSearch = {};
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 5;
        const search = req.query.search || "";
        const price = req.query.price || 1;
        if (search !== "") {
            const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // Thoát các ký tự đặc biệt trong chuỗi tìm kiếm
            objSearch.name = { $regex: new RegExp(escapedSearch, "iu") }; // Tìm kiếm sản phẩm với tên không có dấu
        }
        console.log(objSearch);
        const productseries = await _ProductSeries.find(objSearch);
        console.log(`Found ${productseries.length} matching product series`);
        console.log("search", search);
        const response = {
            page: page + 1,
            limit,
            data: productseries,
        };

        return res.json({
            successCode: 201,
            data: response,
        });
    } catch (error) {
        console.log(error);
    }
};
