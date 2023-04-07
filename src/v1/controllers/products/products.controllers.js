import _Product from "../../models/product.model";
import _Category from "../../models/categories.model";
import _Author from "../../models/author.model";
import _Publishing from "../../models/publishing.model";
import _Supplieres from "../../models/supplieres.module";
import _Formbook from "../../models/formbook.model";

export const listProduct = async (req, res) => {
  try {
    const data = await _Product.find();
    return res.json({
      successCode: 200,
      data: data,
    });
  } catch (error) {
    return res.json({
      message: "Không tìm thấy sản phẩm",
      errorCode: 400,
    });
  }
};
export const readProduct = async (req, res) => {
  try {
    const product = await _Product.findOne({ _id: req.params.id }).exec();
    const { categorieId, publishingHousId, formBookId, authorId } = product;
    const categorie = await _Category.findOne({ _id: categorieId }).exec();
    const publishingHous = await _Publishing
      .findOne({ _id: publishingHousId })
      .exec();
    const formBook = await _Formbook.findOne({ _id: formBookId }).exec();
    const author = await _Author.findOne({ _id: authorId }).exec();
    const supplieres = await _Supplieres.findOne({ _id: supplieresId }).exec();
    const productFind = {
      ...product,
      categorieId: categorie,
      publishingHousId: publishingHous,
      formBookId: formBook,
      authorId: author,
      supplieresId: supplieres,
    };
    return res.json({
      successCode: 200,
      data: productFind,
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
    if (productOld) {
      return errorFNC("product unique");
    }
    const product = new _Product(req.body);
    const result = await _Product(product).save();
    if (result) {
       return res.json({
          errorCode: 200,
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
