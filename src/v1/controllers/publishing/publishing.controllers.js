import _Publishing from "../../models/publishing.model";
export const list = async (req, res) => {
  try {
    const data = await _Publishing.find();
    return res.json({
      successCode: 200,
      data: data,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't list publishing",
    });
  }
};
export const read = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const publishing = await _Publishing.findOne(filter).exec();
    if (!publishing) {
      return res.json({
        errorCode: 404,
        message: "Publishing is not valid",
      });
    }
    return res.json({
      successCode: 200,
      data: publishing,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't find publishing",
    });
  }
};
export const add = async (req, res) => {
  try {
    const publishing = await _Publishing(req.body).save();
    return res.json({
      successCode: 200,
      data: publishing,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't add publishing",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const publishing = await _Publishing.findOneAndDelete({ _id: id }).exec();
    return res.json({
      successCode: 200,
      data: publishing,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't delete publishing",
    });
  }
};

export const update = async (req, res) => {
  try {
    const publishing = await _Publishing.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    return res.json({
      successCode: 200,
      data: publishing,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't update publishing",
    });
  }
};
