import _Formbook from "../../models/formbook.model";
export const list = async (req, res) => {
  try {
    const data = await _Formbook.find();
    return res.json({
      successCode: 200,
      data: data,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't list formbook",
    });
  }
};
export const read = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const formbook = await _Formbook.findOne(filter).exec();
    if (!formbook) {
      return res.json({
        errorCode: 404,
        message: "Formbook is not valid",
      });
    }
    return res.json({
      successCode: 200,
      data: formbook,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't find formbook",
    });
  }
};
export const add = async (req, res) => {
  try {
    const formbook = await _Formbook(req.body).save();
    return res.json({
      successCode: 200,
      data: formbook,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't add formbook",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const formbook = await _Formbook.findOneAndDelete({ _id: id }).exec();
    return res.json({
      successCode: 200,
      data: formbook,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't delete formbook",
    });
  }
};

export const update = async (req, res) => {
  try {
    const formbook = await _Formbook.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    return res.json({
      successCode: 200,
      data: formbook,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't update formbook",
    });
  }
};
