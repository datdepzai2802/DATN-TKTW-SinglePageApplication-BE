import _Voucher from "../../models/voucher.model";
export const list = async (req, res) => {
  try {
    const data = await _Voucher.find();
    return res.json({
      successCode: 200,
      data: data,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't list voucher",
    });
  }
};
export const read = async (req, res) => {
  const filter = { voucherId: req.params.voucherId };
  const populate = req.query["_expand"];
  try {
    const voucher = await _Voucher.findOne(filter).exec();
    if (!voucher) {
      return res.json({
        errorCode: 404,
        message: "Voucher is not valid",
      });
    }
    return res.json({
      successCode: 200,
      data: voucher,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't find voucher",
    });
  }
};
export const add = async (req, res) => {
  try {
    const voucher = await _Voucher(req.body).save();
    return res.json({
      successCode: 200,
      data: voucher,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't add voucher",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const voucher = await _Voucher.findOneAndDelete({ _id: id }).exec();
    return res.json({
      successCode: 200,
      data: voucher,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't delete voucher",
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
    return res.json({
      successCode: 200,
      data: voucher,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't update voucher",
    });
  }
};
