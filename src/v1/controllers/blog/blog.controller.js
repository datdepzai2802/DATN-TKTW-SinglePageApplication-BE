import _Blog from "../../models/blog.model";

export const listBlog = async (req, res) => {
  try {
    const blog = await _Blog.find();
    return res.json({
      succsessCode: 200,
      data: blog,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't list blog",
    });
  }
};

export const readBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await _Blog.findOne({ _id: id });
    if (!blog) {
      return res.json({
        errorCode: 404,
        message: "Blog is not valid",
      });
    }
    return res.json({
      succsessCode: 200,
      data: blog,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't find blog",
    });
  }
};

export const addBlog = async (req, res) => {
  try {
    const blog = await new _Blog(req.body).save();
    return res.json({
      succsessCode: 200,
      data: blog,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't add blog",
    });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const blog = await _Blog.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    return res.json({
      succsessCode: 200,
      data: blog,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't update blog",
    });
  }
};

export const removeBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await _Blog.findOneAndRemove({ _id: id });
    return res.json({
      succsessCode: 200,
      data: blog,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't delete blog",
    });
  }
};
