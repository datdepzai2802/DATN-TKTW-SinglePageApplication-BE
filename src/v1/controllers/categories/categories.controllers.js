import _Categories from "../../models/categories.model";

export const listCategory = async (req, res) => {
  try {
    const category = await _Categories.find();
    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({
      message: "Can't find category",
    });
  }
};

export const readCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await _Categories.findOne({ _id: id });
    if (!category) {
      return res.status(404).json({
        message: "Can't find category",
      });
    }
    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({
      message: "Can't find category",
    });
  }
};

export const addCategory = async (req, res) => {
  try {
    const category = await new _Categories(req.body).save();
    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({
      messsage: "Can't add category",
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
    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({
      messsage: "Can't update category",
    });
  }
};

export const removeCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await _Categories.findOneAndRemove({ _id: id });
    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({
      message: "Can't delete category",
    });
  }
};
