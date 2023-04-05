import Product from "../../models/product.model";
import { errorFNC, successFNC } from "../../responses/responsesBasic";
export const listProduct = async (req, res) => {
  try {
    const data = await Product.find();
    res.json(data);
  } catch (error) {
    res.status(400).json({
      error: "Không có sản phẩm nào",
    });
  }
};
export const readProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id }).exec();
    console.log("product", product);
    res.json(product);
  } catch (error) {
    res.status(400).json({
      message: "Không tìm thấy sản phẩm",
      error,
    });
  }
};
export const addProduct = async (req, res) => {
  try {
    console.log("req", req.body);
    const productOld = await Product.find({ name: req.body.name });
    if (productOld) {
      return errorFNC("product unique");
    }
    const product = new Product(req.body);
    const result = await Product(product).save();
    if (result) {
      return res.status(200).json(result);
    }
  } catch (error) {
    return res.status(400).json({
      error: "Không thêm được sản phẩm",
    });
  }
};
export const removeProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOneAndDelete({ _id: id }).exec();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      error: "Không xóa được sản phẩm",
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.json(product);
  } catch (error) {
    res.status(400).json({
      error: "Không cập nhật được sản phẩm",
    });
  }
};
