import _AddressUser from "../../models/addressUser.model";

export const list = async (req, res) => {
  try {
    const userId = req.params.id;
    let data = await _AddressUser
      .find({ user: userId })
      .populate({
        path: "user",
        select: "email isActive",
      })
      .sort({ createdAt: 1 });

    return res.json({
      successCode: 200,
      data: data,
    });
  } catch (error) {
    console.log("error", error);
    return res.json({
      errorCode: 400,
      message: "Can't list infoUsers",
    });
  }
};

export const read = async (req, res) => {
  try {
    const userId = req.params.id;
    let data = await _AddressUser
      .find({ user: userId, isActive: true })
      .populate({
        path: "user",
        select: "email isActive",
      });

    return res.json({
      successCode: 200,
      data: data,
    });
  } catch (error) {
    console.log("error", error);
    return res.json({
      errorCode: 400,
      message: "Can't list infoUsers",
    });
  }
};

export const add = async (req, res) => {
  try {
    const { user } = req.body;
    const reqData = req.body;
    let infoUsers = await _AddressUser.find({ user });
    if (!infoUsers.length) {
      reqData.isActive = true;
      console.log("reqData", reqData);
    }
    const newData = new _AddressUser(reqData);
    await newData.save();

    let data = await _AddressUser
      .find({ user })
      .populate({
        path: "user",
        select: "email isActive",
      })
      .sort({ createdAt: -1 });
    return res.json({
      successCode: 200,
      data: data,
    });
  } catch (error) {
    console.log("error", error);
    return res.json({
      errorCode: 400,
      message: "Can't add infoUsers",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const infoUsers = await _AddressUser.findOneAndDelete({ _id: id }).exec();
    if (!infoUsers) {
      return res.json({
        errorCode: 401,
        message: "Can't remove infoUsers",
      });
    }
    return res.json({
      successCode: 200,
      data: infoUsers,
    });
  } catch (error) {
    return res.json({
      errorCode: 400,
      message: "Can't delete infoUsers",
    });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.body.user;
    console.log("userId", userId);
    const newInfo = await _AddressUser.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!newInfo) {
      return res.json({
        errorCode: 400,
        message: "Info not found",
      });
    }

    let data = await _AddressUser
      .find({ user: userId })
      .populate({
        path: "user",
        select: "email isActive",
      })
      .sort({ createdAt: -1 });
    return res.json({
      successCode: 200,
      data: data,
    });
  } catch (error) {
    console.log("error", error);
    return res.json({
      errorCode: 400,
      message: "Can't update infoUsers",
    });
  }
};
