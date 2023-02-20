import categories from "../../models/categories.model";

export const listCategory = async(req, res)=>{
    try {
        const category = await categories.find();
        return res.status(200).json({
            data: category,
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

export const readCategory = async(req, res)=>{
    try {
        const id = req.params.id;
        const category = await categories.findOne({_id:id});
        return res.status(200).json({
            data: category,
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

export const addCategory = async(req,res)=>{
    try {
        const category = await new categories(req.body).save();
        return res.status(200).json({
            data: category,
        })
    } catch (error) {
        return res.status(400).json({
            messsage: "Không thêm được sản phẩm",
        })
    }
}

export const updateCategory = async(req,res)=>{
    try {
        const id = req.params.id;
        const body = req.body;
        const category = await categories.findOneAndUpdate({_id:id}, body, {new: true});
        return res.status(200).json({
            data: category,
        })
    } catch (error) {
        return res.status(400).json({
            messsage: "Không cập nhật được sản phẩm",
        })
    }
}

export const removeCategory = async(req, res)=>{
    try {
        const id = req.params.id;
        const category = await categories.findOneAndRemove({_id:id});
        return res.status(200).json({
            data: category,
        })
    } catch (error) {
        return res.status(400).json({
            message: "Không xóa được sản phẩm"
        })
    }
}
