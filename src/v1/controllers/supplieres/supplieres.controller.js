import _Supplieres from "../../models/supplieres.module";
export const listSupplieres = async (req, res) => {
    try {
        const data = await _Supplieres.find();
        return res.json({
            successCode: 200,
            data: data,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't list supplieres",
        });
    }
};
export const readSupplieres = async (req, res) => {
    const filter = { _id: req.params.id };
    try {
        const supplieres = await _Supplieres.findOne(filter).exec();
        if (!supplieres) {
            return res.json({
                errorCode: 404,
                message: "Supplieres is not valid",
            });
        }
        return res.json({
            successCode: 200,
            data: supplieres,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't find supplieres",
        });
    }
};
export const addSupplieres = async (req, res) => {
    try {
        const suppliery = await _Supplieres(req.body).save();
        return res.json({
            successCode: 200,
            data: suppliery,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't add supplieres",
        });
    }
};
export const removeSupplieres = async (req, res) => {
    try {
        const id = req.params.id;
        const suppliery = await _Supplieres
            .findOneAndDelete({ _id: id })
            .exec();
        return res.json({
            successCode: 200,
            data: suppliery,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't delete supplieres",
        });
    }
};

export const updateSupplieres = async (req, res) => {
    try {
        const suppliery = await _Supplieres.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            {
                new: true,
            }
        );
        return res.json({
            successCode: 200,
            data: suppliery,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't update supplieres",
        });
    }
};

export const searchSupplier = async (req, res) => {
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
        const supplieres = await _Supplieres.find(objSearch);
        console.log(`Found ${supplieres.length} matching supplieres`);
        console.log("search", search);
        const response = {
            page: page + 1,
            limit,
            data: supplieres,
        };

        return res.json({
            successCode: 201,
            data: response,
        });
    } catch (error) {
        console.log(error);
    }
};
