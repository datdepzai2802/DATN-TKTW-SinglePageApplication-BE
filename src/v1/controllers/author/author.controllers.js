import _Author from "../../models/author.model";
export const list = async (req, res) => {
  try {
    const data = await _Author.find();
    return res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: "Can't find author",
    });
  }
};
export const read = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const author = await _Author.findOne(filter).exec();
    if (!author) {
      return res.status(404).json({
        message: "Can't find author",
      });
    }
    return res.status(200).json(author);
  } catch (error) {
    res.status(400).json({
      error: "Can't find author",
    });
  }
};
export const add = async (req, res) => {
  try {
    const author = await _Author(req.body).save();
    return res.status(200).json(author);
  } catch (error) {
    res.status(400).json({
      error: "Can't add author",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const author = await _Author.findOneAndDelete({ _id: id }).exec();
    return res.status(200).json(author);
  } catch (error) {
    res.status(400).json({
      error: "Can't delete author",
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
    return res.status(200).json(author);
  } catch (error) {
    res.status(400).json({
      error: "Can't update author",
    });
  }
};
