import _Cart from "../../models/cart.model";
export const list = async (req, res) => {
    try {
        const data = await _Cart.find();
        return res.json({
            successCode: 200,
            data: data,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't list cart",
        });
    }
};
export const read = async (req, res) => {
    const filter = { _id: req.params.id };
    try {
        const cart = await _Cart.findOne(filter).exec();
        if (!cart) {
            return res.json({
                errorCode: 404,
                message: "Formbook is not valid",
            });
        }
        return res.json({
            successCode: 200,
            data: formbook,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't find formbook",
        });
    }
};
export const add = async (req, res) => {
    try {
        const cart = await _Cart(req.body).save();
        return res.json({
            successCode: 200,
            data: cart,
        });
    } catch (error) {
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
        return res.json({
            successCode: 200,
            data: cart,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't delete cart",
        });
    }
};

export const update = async (req, res) => {
    try {
        const cart = await _Cart.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            {
                new: true,
            }
        );
        return res.json({
            successCode: 200,
            data: cart,
        });
    } catch (error) {
        return res.json({
            errorCode: 400,
            message: "Can't update cart",
        });
    }
};
