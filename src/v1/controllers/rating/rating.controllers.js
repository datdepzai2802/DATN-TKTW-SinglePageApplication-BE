import ratingModel from "../../models/rating.model";
export const listRating = async (req, res) => {
    try {
        const data = await ratingModel.find();
        res.json(data);
    } catch (error) {
        res.status(400).json({
            error: "Không có đánh giá nào",
        })
    }
}
export const readRating = async (req, res) => {
    const filter = { _id: req.params.id };
    const populate = req.query["_expand"];
    try {
        const rating = await ratingModel.findOne(filter).select("-__v").populate(populate).exec();
        console.log("rating", rating);
        res.json(rating);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy đánh giá",
            error,
        })
    }
}
export const addRating = async (req, res) => {
    try {
        console.log("rating");
        const rating = await ratingModel(req.body).save();
        console.log("rating");
        return res.json(rating);
        console.log("rating", rating);
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được đánh giá",
        })
    }
}
export const removeRating = async (req, res) => {
    try {
        const id = req.params.id;
        const rating = await ratingModel.findOneAndDelete({ _id: id }).exec();
        res.json(rating);
    } catch (error) {
        res.status(400).json({
            error: "Không xóa được đánh giá",
        })
    }
}

export const updateRating = async (req, res) => {
    try {
        const rating = await ratingModel.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        res.json(rating);
    } catch (error) {
        res.status(400).json({
            error: "Không cập nhật được đánh giá",
        })
    }
}