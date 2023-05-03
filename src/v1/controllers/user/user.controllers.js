import _User from "../../models/user.model";

const User = {
  list: async (req, res) => {
    try {
      const users = await _User.find({ role: 0 });
      if (!users) {
        return res.json({
          errorCode: 404,
          message: "User is not valid",
        });
      }
      return res.json({
        successCode: 200,
        data: users,
      });
    } catch (error) {
      return res.json({
        errorCode: 400,
        message: "Can't list user",
      });
    }
  },
  listRoot: async (req, res) => {
    try {
      const users = await _User.find({ role: { $gt: 0 } });
      if (!users) {
        return res.json({
          errorCode: 404,
          message: "User is not valid",
        });
      }
      return res.json({
        successCode: 200,
        data: users,
      });
    } catch (error) {
      return res.json({
        errorCode: 400,
        message: "Can't list user",
      });
    }
  },
  read: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await _User.findOne({ _id: id });
      if (!user) {
        return res.json({
          errorCode: 404,
          message: "User is not valid",
        });
      }
      return res.json({
        successCode: 200,
        data: user,
      });
    } catch (error) {
      return res.json({
        errorCode: 400,
        message: "Can't find user",
      });
    }
  },
  remove: async (req, res) => {
    try {
      const { id } = req.params;
      const rs = await _User.findOneAndDelete({ _id: id });
      if (!rs) {
        return res.json({
          errorCode: 404,
          message: "User is not valid",
        });
      }
      return res.json({
        successCode: 200,
        data: rs,
      });
    } catch (error) {
      return res.json({
        errorCode: 400,
        message: "Can't delete user",
      });
    }
  },
  add: async (req, res) => {
    try {
      const data = req.body;
      const userOld = await _User.find({ email: data.email });
      console.log("userOld", userOld);
      if (userOld.length) {
        return res.json({
          errorCode: 401,
          message: "User exists",
        });
      }
      const user = await _User(data).save();
      if (!user) {
        return res.json({
          errorCode: 404,
          message: "User is not valid",
        });
      }
      return res.json({
        successCode: 200,
        data: user,
      });
    } catch (error) {
      return res.json({
        errorCode: 400,
        message: "Can't add user",
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const user = await _User.findOneAndUpdate({ _id: id }, data, {
        new: true,
      });
      if (!user) {
        return res.json({
          errorCode: 404,
          message: "User is not valid",
        });
      }
      return res.json({
        successCode: 200,
        data: user,
      });
    } catch (error) {
      return res.json({
        errorCode: 400,
        message: "Can't update user",
      });
    }
  },
};

export default User;
