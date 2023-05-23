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

export const searchCate = async (req, res) => {
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
        const category = await _Categories.find(objSearch);
        console.log(`Found ${category.length} matching categories`);
        console.log("search", search);
        const response = {
            page: page + 1,
            limit,
            data: category,
        };

        return res.json({
            successCode: 201,
            data: response,
        });
    } catch (error) {
        console.log(error);
    }
};
