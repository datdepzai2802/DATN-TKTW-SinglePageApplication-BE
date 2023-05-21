import _Comment from "../../models/comment.model";

export const createComment = async (req, res) => {
  try {
    const { user, product } = req.body;
    console.log("user", user);
    const comment = new _Comment(req.body);
    const result = await comment.save();
    if (!result) {
      res.json({ success: false, message: "Add comment false!" });
    }
    const data = await _Comment
      .find({ product: product._id })
      .populate({ path: "user" })
      .populate({ path: "product" })
      .sort({ createdAt: -1 });
    res.json({ success: true, data: data });
  } catch (error) {
    console.log("error", error);
    res.json({ success: false, message: "Add comment false" });
  }
};

export const getComments = async (req, res) => {
  const productId = req.params.id;
  try {
    const comments = await _Comment
      .find({ productId })
      .populate({ path: "user" })
      .populate({ path: "product" })
      .sort({ createdAt: -1 });
    res.status(200).json({ success: true, comments });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};
export const listComments = async (req, res) => {
  const { rating } = req.query;
  const { productId } = req.params;
  try {
    let query = { product: productId, isHidden: false };
    if (rating) {
      query.rating = Number(rating);
    }
    const comments = await _Comment
      .find(query)
      .populate({ path: "user" })
      .populate({ path: "product" })
      .sort({ createdAt: -1 });
    return res.json({ success: true, data: comments });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const updateComment = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const updatedComment = await _Comment.findByIdAndUpdate(
      id,
      { content },
      { new: true }
    );
    res.status(200).json({ success: true, updatedComment });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

export const deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    await _Comment.findByIdAndRemove(id);
    return res.json({ success: true, message: "Comment deleted successfully" });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};
