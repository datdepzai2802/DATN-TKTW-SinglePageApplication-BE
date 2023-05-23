import _infomationPage from "../../models/infomationPage.model";

export const list = async (req, res) => {
    try {
        const information = await _infomationPage
            .find()
            .populate({ path: "categoryInfor" })
            .exec();
        return res.json({
            successCode: 200,
            data: information,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't list information",
        });
    }
};
export const read = async (req, res) => {
    console.log(123);
    const { id } = req.params;
    try {
        const page = await _infomationPage
            .findOne({
                _id: id,
            })
            .populate({ path: "categoryInfor" })
            .exec();
        console.log("page", page);
        if (!page) {
            return res.json({
                errorCode: 404,
                message: `${id} is not valid`,
            });
        }
        return res.json({
            successCode: 200,
            data: page,
        });
    } catch (error) {
        console.log("error", error);
        return res.json({
            errorCode: 400,
            message: "Can't find page",
        });
    }
};
export const add = async (req, res) => {
    try {
        const { title } = req.body;
        const page = await _infomationPage.find({ title });
        if (!page) {
            return res.json({
                errorCode: 400,
                message: "page exit!!",
            });
        }

        const newPage = new _infomationPage(req.body);
        const result = await _infomationPage(newPage).save();
        if (!result) {
            return res.json({
                errorCode: 400,
                message: "Add page false",
            });
        }
        const data = await _infomationPage.find({ isHidden: false });

        return res.json({
            successCode: 200,
            data,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't add page",
        });
    }
};

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const information = await _infomationPage.findOneAndUpdate(
            { _id: id },
            body,
            {
                new: true,
            }
        );
        return res.json({
            successCode: 200,
            data: information,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't update information",
        });
    }
};

export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const information = await _infomationPage.findOneAndRemove({ _id: id });
        return res.json({
            successCode: 200,
            data: information,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't delete information",
        });
    }
};

export const searchInfor = async (req, res) => {
    try {
        let objSearch = {};
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 5;
        const search = req.query.search || "";
        const price = req.query.price || 1;
        if (search !== "") {
            const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // Thoát các ký tự đặc biệt trong chuỗi tìm kiếm
            objSearch.title = { $regex: new RegExp(escapedSearch, "iu") }; // Tìm kiếm sản phẩm với tên không có dấu
        }
        console.log(objSearch);
        const information = await _infomationPage.find(objSearch);
        console.log(`Found ${information.length} matching information`);
        console.log("search", search);
        const response = {
            page: page + 1,
            limit,
            data: information,
        };

        return res.json({
            successCode: 201,
            data: response,
        });
    } catch (error) {
        console.log(error);
    }
};
