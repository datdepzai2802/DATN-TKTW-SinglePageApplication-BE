import _Banner from "../../models/banner.model";

export const listBanner = async (req, res) => {
  try {
    const banner = await _Banner.find();
    return res.json({
      successCode: 200,
      data: banner,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't list banner",
    });
  }
};

export const readBanner = async (req, res) => {
  try {
    const id = req.params.id;
    const banner = await _Banner.findOne({ _id: id });
    if (!banner) {
      return res.json({
        errorCode: 404,
        message: "Banner is not valid",
      });
    }
    return res.json({
      successCode: 200,
      data: banner,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't find banner",
    });
  }
};

export const addBanner = async (req, res) => {
  try {
    const banner = await new _Banner(req.body).save();
    console.log("banner", banner);
    return res.json({
      successCode: 200,
      data: banner,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't add banner",
    });
  }
};

export const updateBanner = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const banner = await _Banner.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    return res.json({
      successCode: 200,
      data: banner,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't update banner",
    });
  }
};

export const removeBanner = async (req, res) => {
  try {
    const id = req.params.id;
    const banner = await _Banner.findOneAndRemove({ _id: id });
    return res.json({
      successCode: 200,
      data: banner,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't delete banner",
    });
  }
};
