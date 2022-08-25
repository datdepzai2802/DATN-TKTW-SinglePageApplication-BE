import Product from "../models/products.model";

export const List = async (req, res) => {
  try {
    const product = await Product.find().exec();
    res.json(product);
  } catch (error) {
    return res.status(404).json({
      code: 404,
      mesaage: "Not Found!",
    });
  }
};

export const create = async (req, res) => {
  try {
    const newProduct = await new Product(req.body).save();
    res.json(newProduct);
  } catch (error) {
    return res.status(404).json({
      code: 404,
      mesaage: "Not Found!",
    });
  }
};

export const read = async (req, res) => {
  try {
    const id = req.params.id;
    const products = await Product.findOne({ _id: id }).exec();
    res.json(products);
  } catch (error) {
    return res.status(400).json({
      error: "Không tìm thấy sản phẩm",
    });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const products = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    }).exec();
    res.json(products);
  } catch (error) {
    return res.status(400).json({
      error: "Không cập nhật được sản phẩm",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const products = await Product.findOneAndDelete({ _id: id }).exec();
    res.json(products);
  } catch (error) {
    return res.status(400).json({
      error: "Không xóa được sản phẩm",
    });
  }
};
