import Joi from "joi";

export const productValidate = (data) => {
  const productSchema = Joi.object({
    name: Joi.string().lowercase().required(),
    price: Joi.number().required(),
  });
  return productSchema.validate(data);
};
