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

export const productSearch = async (req, res) => {
  try {
    // const genreSupplieres = [];
    // const genreAuthor = [];
    // const genrePublishing = [];
    // const genreFormbook = [];
    // const supplieres = await _Supplieres.find().select("name");
    // supplieres.forEach((item) => genreSupplieres.push(item.name));
    // const authors = await _Author.find().select("name");
    // authors.forEach((item) => genreAuthor.push(item.name));
    // const publishings = await _Publishing.find().select("name");
    // publishings.forEach((item) => genrePublishing.push(item.name));
    // const formbooks = await _Formbook.find().select("name");
    // formbooks.forEach((item) => genreFormbook.push(item.name));
    let objSearch = {};
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";
    const price = req.query.price || 1;
    // let valueSupplieres = req.query.genreSupplieres || "all";
    // let valueAuthor = req.query.genreAuthor || "all";
    // let valuePublishing = req.query.genrePublishing || "all";
    // let valueFormbooks = req.query.formbooks || "all";
    // valueSupplieres === "all"
    //   ? (valueSupplieres = [...genreSupplieres])
    //   : (valueSupplieres = req.query.genreSupplieres.split(","));
    // valueAuthor === "all"
    //   ? (valueAuthor = [...genreSupplieres])
    //   : (valueAuthor = req.query.genreSupplieres.split(","));
    // valuePublishing === "all"
    //   ? (valuePublishing = [...genreSupplieres])
    //   : (valuePublishing = req.query.valuePublishing.split(","));
    // valueFormbooks === "all"
    //   ? (valueFormbooks = [...genreFormbook])
    //   : (valuevalueFormbooks = req.query.valueFormbooks.split(","));
    if (search !== "") {
      const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // Thoát các ký tự đặc biệt trong chuỗi tìm kiếm
      objSearch.name = { $regex: new RegExp(escapedSearch, "iu") }; // Tìm kiếm sản phẩm với tên không có dấu
    }
    // if (price !== "") objSearch.price = new RegExp(search, "i");
    // .skip(page * limit)
    // .limit(limit);
    // .select("name")
    // .where("supplieres", "publishings", "authors", "formbooks")
    // .in([...valueSupplieres])
    // .in([...valueFormbooks])
    // .in([...valuePublishing])
    // .in([...valueAuthor])
    console.log(objSearch);
    const product = await _Product.find(objSearch);
    console.log(`Found ${product.length} matching products`);
    console.log("search", search);
    const response = {
      page: page + 1,
      limit,
      data: product,
    };

    return res.json({
      successCode: 201,
      data: response,
    });
  } catch (error) {
    // return res.json({
    //   message: "Can't update products",
    //   errorCode: 400,
    // });
    console.log(error);
  }
};