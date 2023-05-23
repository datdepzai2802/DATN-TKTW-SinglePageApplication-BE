import _CategoryInformationPage from "../../models/categories_infomation_page.model";
import _InformationPage from "../../models/infomationPage.model";
export const list = async (req, res) => {
    try {
        const categoryInfor = await _CategoryInformationPage.find();
        const inforPage = await _InformationPage
            .find({ categoryInfor: categoryInfor._id })
            .select("-informationPage")
            .exec();
        return res.json({
            successCode: 200,
            data: categoryInfor,
            inforPage,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't list categoryInfor",
        });
    }
};

export const read = async (req, res) => {
    try {
        const id = req.params.id;
        const categoryInfor = await _CategoryInformationPage.findOne({
            _id: id,
        });
        const inforPage = await _InformationPage
            .find({ categoryInfor: categoryInfor })
            .select("-informationPage")
            .exec();
        if (!categoryInfor) {
            return res.json({
                errorCode: 404,
                message: "CategoryInfor is not valid",
            });
        }
        return res.json({
            successCode: 200,
            data: categoryInfor,
            inforPage,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't find categoryInfor",
        });
    }
};

export const add = async (req, res) => {
    try {
        console.log(req.body);
        const categoryInfor = await new _CategoryInformationPage(
            req.body
        ).save();
        console.log(categoryInfor);
        return res.json({
            successCode: 200,
            data: categoryInfor,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't add categoryInfor",
        });
    }
};

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const categoryInfor = await _CategoryInformationPage.findOneAndUpdate(
            { _id: id },
            body,
            {
                new: true,
            }
        );
        return res.json({
            successCode: 200,
            data: categoryInfor,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't update categoryInfor",
        });
    }
};

export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const categoryInfor = await _CategoryInformationPage.findOneAndRemove({
            _id: id,
        });
        return res.json({
            successCode: 200,
            data: categoryInfor,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't delete categoryInfor",
        });
    }
};

export const searchCateInfor = async (req, res) => {
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
        const categoryInfor = await _CategoryInformationPage.find(objSearch);
        console.log(`Found ${categoryInfor.length} matching categoryInfor`);
        console.log("search", search);
        const response = {
            page: page + 1,
            limit,
            data: categoryInfor,
        };

        return res.json({
            successCode: 201,
            data: response,
        });
    } catch (error) {
        console.log(error);
    }
};
