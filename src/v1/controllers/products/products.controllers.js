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
    let objSearch = {};
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";
    const price = req.query.price || "0";
    let author = [];
    let formbook = [];
    let supplieres = [];
    const queryAuthorId = req.query.authors;
    const querySupplieresId = req.query.supplieres;
    const queryFormbooks = req.query.formbooks || null;

    const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    objSearch.name = { $regex: new RegExp(escapedSearch, "iu") };

    // tìm kiếm tác giả
    if (!queryAuthorId || queryAuthorId === "All") {
      const listAuthor = await _Author.find().select("_id");
      author = listAuthor.map((author) => author._id);
    } else {
      // Chỉ thêm giá trị của queryAuthorId vào objSearch nếu giá trị queryAuthorId tồn tại và khác "All"
      if (queryAuthorId !== "All") {
        objSearch.authors = queryAuthorId;
      }
    }

    // Tìm kiếm hình thức sách
    if (queryFormbooks !== null) {
      objSearch.formbooks = queryFormbooks;
    }

    // Tìm kiếm nhà xuất bản
    if (querySupplieresId && querySupplieresId !== "All") {
      objSearch.supplieres = querySupplieresId;
    }
    
    console.log("price:", typeof price);
    if (price !== undefined) {
      const priceRegex = /^[0-9]+(,[0-9]+)*$/;
      if (!priceRegex.test(price)) {
        return res.status(400).json({
          errorCode: 400,
          message: "Invalid price value",
        });
      }
      const priceRange = price.split(",").map((p) => parseInt(p.trim()));
      const minPrice = priceRange[0] || 0;
      const maxPrice = priceRange[1] || Number.MAX_SAFE_INTEGER;
      objSearch.price = { $gte: minPrice, $lte: maxPrice };
    }

    console.log(objSearch);
    const product = await _Product
      .find(objSearch)
      .skip(page * limit)
      .limit(limit);
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
