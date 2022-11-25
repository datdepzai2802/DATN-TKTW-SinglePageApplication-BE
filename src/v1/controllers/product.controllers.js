import productModel from "../models/products.model";
import { productValidate } from "../utils/validator";
import createError from "http-errors";

export const List = async (req, res, next) => {
  try {
    const product = await productModel.find().exec();
    res.json(product);
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const { error } = productValidate(req.body);
    if (error) {
      throw createError(error.details.message);
    }
    console.log(1);
    const newProduct = await new productModel(req.body).save();
    res.json(newProduct);
  } catch (error) {
    next(error);
  }
};

export const read = async (req, res, next) => {
  try {
    const id = req.params.id;
    const products = await productModel.findOne({ _id: id }).exec();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const products = await productModel
      .findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      })
      .exec();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    const id = req.params.id;
    const products = await productModel.findOneAndDelete({ _id: id }).exec();
    res.json(products);
  } catch (error) {
    next(error);
  }
};
