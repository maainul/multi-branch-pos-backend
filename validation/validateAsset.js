import Joi from "joi";

export const validateAsset = async (data) => {
  const assetSchema = Joi.object({
    assetName: Joi.string().min(3).max(50).required().messages({
      "string.base": "Asset name should be a type of text",
      "string.empty": "Asset name can not be empty",
      "string.min": "Asset name should have at least 3 characters",
      "string.max": "Asset name should not exceed 50 characters",
      "any.required": "Asset name is required",
    }),
    assetQuantity: Joi.number()
      .integer()
      .min(1)
      .max(400000)
      .required()
      .messages({
        "number.base": "status should be a type of number",
        "number.integer": "Status must be integer",
        "number.min": "Status must be at least 1",
        "number.max": "Status must be at most 400000",
        "any.required": "Status is required",
      }),
    assetPrice: Joi.number().integer().min(1).max(400000).required().messages({
      "number.base": "Asset Price should be a type of number",
      "number.integer": "Asset Price must be integer",
      "number.min": "Asset Price must be at least 1",
      "number.max": "Asset Price must be at most 400000",
      "any.required": "Asset Price is required",
    }),
    addDate: Joi.date().required().messages({
      "date.base": "Date should be valid date",
      "any.required": "Date is required",
    }),
  });

  const options = { abortEarly: false, allowUnknown: false };
  return assetSchema.validate(data, options);
};
