import _Voucher from "../../models/voucher.model";
export const list = async (req, res) => {
  try {
    const data = await _Voucher.find();
    return res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: "Can't find voucher",
    });
  }
};
export const read = async (req, res) => {
  const filter = { voucherId: req.params.voucherId };
  const populate = req.query["_expand"];
  try {
    const voucher = await _Voucher.findOne(filter).exec();
    if (!voucher) {
      return res.status(404).json({
        message: "Can't find voucher",
      });
    }
    return res.status(200).json(voucher);
  } catch (error) {
    res.status(400).json({
      error: "Can't find voucher",
    });
  }
};
export const add = async (req, res) => {
  try {
    const voucher = await _Voucher(req.body).save();
    return res.status(200).json(voucher);
  } catch (error) {
    res.status(400).json({
      error: "Can't add voucher",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const voucher = await _Voucher.findOneAndDelete({ _id: id }).exec();
    return res.status(200).json(voucher);
  } catch (error) {
    res.status(400).json({
      error: "Can't delete voucher",
    });
  }
};

export const update = async (req, res) => {
  try {
    const voucher = await _Voucher.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json(voucher);
  } catch (error) {
    res.status(400).json({
      error: "Can't update voucher",
    });
  }
};
