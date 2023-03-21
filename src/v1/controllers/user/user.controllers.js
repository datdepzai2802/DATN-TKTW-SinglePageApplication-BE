import _User from "../../models/user.model";

const User = {
  list: async (req, res) => {
    try {
      const users = await _User.find();
      if (!users) {
        return res.status(400).json({
          mesage: "Can not find data!",
        });
      }
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  },
  read: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await _User.findOne({ _id: id });
      if (!user) {
        return res.status(404).json({
          mesage: "user not found!",
        });
      }
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  },
  remove: async (req, res) => {
    try {
      const { id } = req.params;
      const rs = await _User.findOneAndDelete({ _id: id });
      if (!rs) {
        return res.status(404).json({
          mesage: "user not found!",
        });
      }
      res.json(rs);
    } catch (error) {
      console.log(error);
    }
  },
  add: async (req, res) => {
    try {
      const data = req.body;
      const user = await _User(data).save();
      if (!user) {
        return res.status(400).json({
          mesage: "create user fails",
        });
      }
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const user = await _User.findByIdAndUpdate({ _id: id }, data, {
        new: true,
      });
      if (!user) {
        return res.status(400).json({
          mesage: "update user fails",
        });
      }
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  },
};

export default User;
