import _Supplieres from "../../models/product.model";
export const listSupplieres = async (req, res) => {
  try {
    const data = await _Supplieres.find();
    return res.json({
      succsessCode: 200,
      data: data,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't list supplieres",
    });
  }
};
export const readSupplieres = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const supplieres = await _Supplieres.findOne(filter).exec();
    if (!supplieres) {
      return res.json({
        errorCode: 404,
        message: "Supplieres is not valid",
      });
    }
    return res.json({
      succsessCode: 200,
      data: supplieres,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't find supplieres",
    });
  }
};
export const addSupplieres = async (req, res) => {
  try {
    const suppliery = await _Supplieres(req.body).save();
    return res.json({
      succsessCode: 200,
      data: suppliery,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't add supplieres",
    });
  }
};
export const removeSupplieres = async (req, res) => {
  try {
    const id = req.params.id;
    const suppliery = await _Supplieres.findOneAndDelete({ _id: id }).exec();
    return res.json({
      succsessCode: 200,
      data: suppliery,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't delete supplieres",
    });
  }
};

export const updateSupplieres = async (req, res) => {
  try {
    const suppliery = await _Supplieres.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    return res.json({
      succsessCode: 200,
      data: suppliery,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't update supplieres",
    });
  }
};
