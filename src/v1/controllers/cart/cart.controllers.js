import _Cart from "../../models/cart.model";

export const list = async (req, res) => {
  try {
    const userId = req.params.id;
    let data = await _Cart
      .find({ user: userId })
      .populate({
        path: "user",
        select: "email isActive",
      })
      .populate({
        path: "product",
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
      message: "Can't list cart",
    });
  }
};

export const read = async (req, res) => {
  try {
    let data = await _Cart
      .find({ _id: req.params.id })
      .populate({
        path: "user",
        select: "email isActive",
      })
      .populate({
        path: "product",
        select: "name price sale productImage quantity",
      })
      .sort({ createdAt: -1 });
    console.log("data", data);
    return res.json({
      successCode: 200,
      data: data,
    });
  } catch (error) {
    console.log("error", error);
    return res.json({
      errorCode: 400,
      message: "Can't list cart",
    });
  }
};

export const add = async (req, res) => {
    const cartData = req.body;
    const product = cartData.product;
    const quantity = cartData.quantity;
    const user = cartData.user;
    let cart = await _Cart.findOne({ product, user });
    if (cart) {
      cart.quantity += quantity;
      cart = await cart.save();
    } else {
      const newCart = new _Cart(cartData);
      cart = await newCart.save();
    }

    let data = await _Cart
      .find({ user })
      .populate({
        path: "user",
        select: "email isActive",
      })
      .populate({
        path: "product",
        select: "name price sale productImage quantity",
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
      message: "Can't add cart",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const cart = await _Cart.findOneAndDelete({ _id: id }).exec();
    if (!cart) {
      return res.json({
        errorCode: 401,
        message: "Can't remove cart",
      });
    }
    return res.json({
      successCode: 200,
      data: cart,
    });
  } catch (error) {
    console.log("error", error);
    return res.json({
      errorCode: 400,
      message: "Can't delete cart",
    });
  }
};

export const update = async (req, res) => {
  try {
    const { id: cartId } = req.params;
    const { _id: userId } = req.body.user;
    console.log("req.body.quantity ", req.body.quantity);
    console.log("userId ", userId);
    if (req.body.quantity <= 0) {
      await _Cart.findOneAndDelete({ _id: cartId });
    } else {
      const cart = await _Cart.findOneAndUpdate({ _id: cartId }, req.body, {
        new: true,
      });
      if (!cart) {
        return res.json({
          errorCode: 400,
          message: "Cart not found",
        });
      }
    }

    let data = await _Cart
      .find({ user: userId })
      .populate({
        path: "user",
        select: "email isActive",
      })
      .populate({
        path: "product",
        select: "name price sale productImage quantity",
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
      message: "Can't update cart",
    });
  }
};
