import _Payment from "../../models/payment.model";

export const add = async (req, res) => {
  try {
    const data = await _Payment(req.body).save();
    return res.json({
      successCode: 200,
      data,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't add formbook",
    });
  }
};
