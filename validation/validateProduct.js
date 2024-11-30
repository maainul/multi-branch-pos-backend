import Joi from "joi";

export const validateProduct = async (data) => {
  const productSchema = Joi.object({
    name: Joi.string().min(3).max(50).required().messages({
      "string.base": "name should be a type of text",
      "string.empty": "name can not be empty",
      "string.min": "name should have at least 3 characters",
      "string.max": "name should not exceed 50 characters",
      "any.required": "name is required",
    }),
    genericName: Joi.string().min(3).max(50).required().messages({
      "string.base": "generic Name should be a type of text",
      "string.empty": "generic Name can not be empty",
      "string.min": "generic Name should have at least 3 characters",
      "string.max": "generic Name should not exceed 50 characters",
      "any.required": "generic Name is required",
    }),
    reminderQuantity: Joi.number()
      .integer()
      .min(1)
      .max(400000)
      .required()
      .messages({
        "number.base": "reminder Quantity should be a type of number",
        "number.integer": "reminder Quantity must be integer",
        "number.min": "reminder Quantity must be at least 1",
        "number.max": "reminder Quantity must be at most 400000",
        "any.required": "reminder Quantity is required",
      }),
    saleQuantity: Joi.number().integer().min(1).max(40000).required().messages({
      "number.base": "sale Quantity should be a type of number",
      "number.integer": "sale Quantity must be integer",
      "number.min": "sale Quantity must be at least 1",
      "number.max": "sale Quantity must be at most 40000",
      "any.required": "sale Quantity is required",
    }),

    status: Joi.number().integer().min(1).max(4).required().messages({
      "number.base": "status should be a type of number",
      "number.integer": "Status must be integer",
      "number.min": "Status must be at least 1",
      "number.max": "Status must be at most 4",
      "any.required": "Status is required",
    }),
    categoryId: Joi.string().hex().length(24).required(),
    subCategoryId: Joi.string().hex().length(24).required(),
    branchId: Joi.string().hex().length(24).required(),
  });

  const options = { abortEarly: false, allowUnknown: false };
  return productSchema.validate(data, options); // Return async validation
};
