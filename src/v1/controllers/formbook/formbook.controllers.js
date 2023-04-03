import _Formbook from "../../models/formbook.model";
export const list = async (req, res) => {
  try {
    const data = await _Formbook.find();
    return res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: "Can't find formbook",
    });
  }
};
export const read = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const formbook = await _Formbook.findOne(filter).exec();
    if (!formbook) {
      return res.status(404).json({
        message: "Can't find formbook",
      });
    }
    return res.status(200).json(formbook);
  } catch (error) {
    res.status(400).json({
      message: "Can't find formbook",
      error,
    });
  }
};
export const add = async (req, res) => {
  try {
    const formbook = await _Formbook(req.body).save();
    return res.status(200).json(formbook);
  } catch (error) {
    res.status(400).json({
      error: "Can't add formbook",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const formbook = await _Formbook.findOneAndDelete({ _id: id }).exec();
    return res.status(200).json(formbook);
  } catch (error) {
    res.status(400).json({
      error: "Can't delete formbook",
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
    return res.status(200).json(formbook);
  } catch (error) {
    res.status(400).json({
      error: "Can't update data",
    });
  }
};
