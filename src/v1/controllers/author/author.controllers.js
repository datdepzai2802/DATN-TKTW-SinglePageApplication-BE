import _Author from "../../models/author.model";
export const list = async (req, res) => {
    try {
        const data = await _Author.find();
        return res.json({
            successCode: 200,
            data: data,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Email is not valid",
        });
    }
};
export const read = async (req, res) => {
    const filter = { _id: req.params.id };
    try {
        const author = await _Author.findOne(filter).exec();
        if (!author) {
            return res.json({
                errorCode: 404,
                message: "Author is not valid",
            });
        }
        return res.json({
            successCode: 200,
            data: author,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't find author",
        });
    }
};
export const add = async (req, res) => {
    try {
        const author = await _Author(req.body).save();
        return res.json({
            successCode: 200,
            data: author,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't add author",
        });
    }
};

export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const author = await _Author.findOneAndDelete({ _id: id }).exec();
        return res.json({
            successCode: 200,
            data: author,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't delete author",
        });
    }
};

export const update = async (req, res) => {
    try {
        const author = await _Author.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            {
                new: true,
            }
        );
        return res.json({
            successCode: 200,
            data: author,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't update author",
        });
    }
};

export const searchAuthor = async (req, res) => {
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
        const author = await _Author.find(objSearch);
        console.log(`Found ${author.length} matching author`);
        console.log("search", search);
        const response = {
            page: page + 1,
            limit,
            data: author,
        };

        return res.json({
            successCode: 201,
            data: response,
        });
    } catch (error) {
        console.log(error);
    }
};
