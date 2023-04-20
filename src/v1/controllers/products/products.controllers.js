import _Product from "../../models/product.model";
import _Supplieres from "../../models/supplieres.module";
import _Author from "../../models/author.model";
import _Publishing from "../../models/publishing.model";
import _Formbook from "../../models/formbook.model";

export const listProduct = async (req, res) => {
  try {
    console.log("get product");
    const data = await _Product
      .find()
      .populate({ path: "categories", select: "name" })
      .populate({ path: "supplieres", select: "name" })
      .populate({ path: "publishings", select: "name" })
      .populate({ path: "authors", select: "name" })
      .populate({ path: "formbooks", select: "name" })
      .exec();
    // console.log("data", data);

    return res.json({
      successCode: 200,
      data: data,
    });
  } catch (error) {
    return res.json({
      message: "Không tìm thấy sản phẩm",
      errorCode: 400,
    });
    // console.log(error);
  }
};
export const readProduct = async (req, res) => {
  try {
    const product = await _Product
      .findOne({ _id: req.params.id })
      .populate({ path: "categories", select: "name" })
      .populate({ path: "supplieres", select: "name" })
      .populate({ path: "publishings", select: "name" })
      .populate({ path: "authors", select: "name" })
      .populate({ path: "formbooks", select: "name" })
      .exec();
    return res.json({
      successCode: 200,
      data: product,
    });
  } catch (error) {
    return res.json({
      message: "Không tìm thấy sản phẩm",
      errorCode: 400,
    });
  }
};
export const addProduct = async (req, res) => {
  try {
    console.log("req", req.body);
    const productOld = await _Product.find({ name: req.body.name });
    console.log(productOld);
    if (!productOld) {
      return res.json({
        message: "Product already exists",
        errorCode: 401,
      });
    }
    const product = new _Product(req.body);
    const result = await _Product(product).save();
    if (result) {
      return res.json({
        successCode: 200,
        data: result,
      });
    }
  } catch (error) {
    return res.json({
      message: "Can't add products",
      errorCode: 400,
    });
  }
};
export const removeProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await _Product.findOneAndDelete({ _id: id }).exec();
    return res.json({
      successCode: 200,
      data: product,
    });
  } catch (error) {
    return res.json({
      message: "Can't remove products",
      errorCode: 400,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await _Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    return res.json({
      successCode: 200,
      data: product,
    });
  } catch (error) {
    return res.json({
      message: "Can't update products",
      errorCode: 400,
    });
  }
};

