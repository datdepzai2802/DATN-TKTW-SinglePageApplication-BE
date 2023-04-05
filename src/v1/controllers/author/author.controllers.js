import _Author from "../../models/author.model";
export const list = async (req, res) => {
  try {
    const data = await _Author.find();
    return res.json({
      succsessCode: 200,
      data: data,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Email is not valid",
    });
  }
};
export const read = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const author = await _Author.findOne(filter).exec();
    if (!author) {
      return res.json({
        errorCode: 404,
        message: "Author is not valid",
      });
    }
    return res.json({
      succsessCode: 200,
      data: author,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't find author",
    });
  }
};
export const add = async (req, res) => {
  try {
    const author = await _Author(req.body).save();
    return res.json({
      succsessCode: 200,
      data: author,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't add author",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const author = await _Author.findOneAndDelete({ _id: id }).exec();
    return res.json({
      succsessCode: 200,
      data: author,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't delete author",
    });
  }
};

export const update = async (req, res) => {
  try {
    const author = await _Author.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    return res.json({
      succsessCode: 200,
      data: author,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't update author",
    });
  }
};
