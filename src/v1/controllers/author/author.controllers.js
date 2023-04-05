import Author from "../../models/author.model";
export const list = async (req, res) => {
  try {
    const data = await Author.find();

    res.json(data);
  } catch (error) {
    res.status(400).json({
      error: "Error: not data",
    });
  }
};
export const read = async (req, res) => {
  const filter = { _id: req.params.id };
  const author = req.query["_expand"];
  try {
    const author = await Author.findOne(filter)
      .select("-__v")
      .populate(populate)
      .exec();
    console.log("publishing", author);
    res.json(author);
  } catch (error) {
    res.status(400).json({
      message: "Error: not data",
      error,
    });
  }
};
export const add = async (req, res) => {
  try {
    const author = await Author(req.body).save();
    return res.json(author);
    console.log("author", author);
  } catch (error) {
    res.status(400).json({
      error: "Error: not create data",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const author = await Author.findOneAndDelete({ _id: id }).exec();
    res.json(author);
  } catch (error) {
    res.status(400).json({
      error: "Error: not remove data",
    });
  }
};

export const update = async (req, res) => {
  try {
    const author = await Author.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.json(author);
  } catch (error) {
    res.status(400).json({
      error: "Error: not update data",
    });
  }
};
