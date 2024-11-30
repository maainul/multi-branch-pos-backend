import Joi from "joi";

export const validateGift = async (data) => {
  const giftSchema = Joi.object({
    giftName: Joi.string().min(3).max(50).required().messages({
      "string.base": "name should be a type of text",
      "string.empty": "name can not be empty",
      "string.min": "name should have at least 3 characters",
      "string.max": "name should not exceed 50 characters",
      "any.required": "name is required",
    }),
    giftQuantity: Joi.number()
      .integer()
      .min(1)
      .max(400000000)
      .required()
      .messages({
        "number.base": "giftQuantity should be a type of number",
        "number.integer": "giftQuantity must be integer",
        "number.min": "giftQuantity must be at least 1",
        "number.max": "giftQuantity must be at most 400000000",
        "any.required": "giftQuantity is required",
      }),
    stock: Joi.number().integer().min(1).max(400000000).required().messages({
      "number.base": "stock should be a type of number",
      "number.integer": "stock must be integer",
      "number.min": "stock must be at least 1",
      "number.max": "stock must be at most 400000000",
      "any.required": "stock is required",
    }),
    expDate: Joi.date().required().messages({
      "date.base": "expDate should be valid date",
      "any.required": "exp Date is required",
    }),
    status: Joi.number().integer().min(1).max(4).required().messages({
      "number.base": "status should be a type of number",
      "number.integer": "Status must be integer",
      "number.min": "Status must be at least 1",
      "number.max": "Status must be at most 4",
      "any.required": "Status is required",
    }),
    supplierId: Joi.string().hex().length(24).required(),
    branchId: Joi.string().hex().length(24).required(),
  });

  const options = { abortEarly: false, allowUnknown: false };
  return giftSchema.validate(data, options); // Return async validation
};
