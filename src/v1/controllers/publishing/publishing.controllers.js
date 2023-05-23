import _Publishing from "../../models/publishing.model";
export const list = async (req, res) => {
    try {
        const data = await _Publishing.find();
        return res.json({
            successCode: 200,
            data: data,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't list publishing",
        });
    }
};
export const read = async (req, res) => {
    const filter = { _id: req.params.id };
    try {
        const publishing = await _Publishing.findOne(filter).exec();
        if (!publishing) {
            return res.json({
                errorCode: 404,
                message: "Publishing is not valid",
            });
        }
        return res.json({
            successCode: 200,
            data: publishing,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't find publishing",
        });
    }
};
export const add = async (req, res) => {
    try {
        const publishing = await _Publishing(req.body).save();
        return res.json({
            successCode: 200,
            data: publishing,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't add publishing",
        });
    }
};
export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const publishing = await _Publishing
            .findOneAndDelete({ _id: id })
            .exec();
        return res.json({
            successCode: 200,
            data: publishing,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't delete publishing",
        });
    }
};

export const update = async (req, res) => {
    try {
        const publishing = await _Publishing.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            {
                new: true,
            }
        );
        return res.json({
            successCode: 200,
            data: publishing,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't update publishing",
        });
    }
};

export const searchPublish = async (req, res) => {
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
        const publishing = await _Publishing.find(objSearch);
        console.log(`Found ${publishing.length} matching publishing`);
        console.log("search", search);
        const response = {
            page: page + 1,
            limit,
            data: publishing,
        };

        return res.json({
            successCode: 201,
            data: response,
        });
    } catch (error) {
        console.log(error);
    }
};
