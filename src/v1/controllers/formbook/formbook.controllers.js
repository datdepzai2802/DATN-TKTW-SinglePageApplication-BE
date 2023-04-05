import Formbook from "../../models/formbook.model";
export const list = async (req, res) => {
  try {
    const data = await Formbook.find();
    res.json(data);
  } catch (error) {
    res.status(400).json({
      error: "Error: not data",
    });
  }
};
export const read = async (req, res) => {
  const filter = { _id: req.params.id };
  const populate = req.query["_expand"];
  try {
    const formbook = await Formbook.findOne(filter)
      .select("-__v")
      .populate(populate)
      .exec();
    console.log("formbook", formbook);
    res.json(formbook);
  } catch (error) {
    res.status(400).json({
      message: "Error: not data",
      error,
    });
  }
};
export const add = async (req, res) => {
  try {
    console.log("formbook", req.body);
    const formbook = await Formbook(req.body).save();
    return res.json(formbook);
  } catch (error) {
    res.status(400).json({
      error: "Error: not create data",
      error,
    });
  }
};
export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const formbook = await Formbook.findOneAndDelete({ _id: id }).exec();
    res.json(formbook);
  } catch (error) {
    res.status(400).json({
      error: "Error: not remove data",
    });
  }
};

export const update = async (req, res) => {
  try {
    const formbook = await Formbook.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.json(formbook);
  } catch (error) {
    res.status(400).json({
      error: "Error: not update data",
    });
  }
};
