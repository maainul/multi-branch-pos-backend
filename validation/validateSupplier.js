import Joi from "joi";

export const validateSupplier = async (data) => {
  const supplierSchema = Joi.object({
    name: Joi.string().min(3).max(50).required().messages({
      "string.base": "name should be a type of text",
      "string.empty": "name can not be empty",
      "string.min": "name should have at least 3 characters",
      "string.max": "name should not exceed 50 characters",
      "any.required": "name is required",
    }),
    company: Joi.string().min(3).max(50).required().messages({
      "string.base": "company should be a type of text",
      "string.empty": "company can not be empty",
      "string.min": "company should have at least 3 characters",
      "string.max": "company should not exceed 50 characters",
      "any.required": "company is required",
    }),
    phone: Joi.string().min(3).max(50).required().messages({
      "string.base": "phone should be a type of text",
      "string.empty": "phone can not be empty",
      "string.min": "phone should have at least 3 characters",
      "string.max": "phone should not exceed 50 characters",
      "any.required": "phone is required",
    }),
    address: Joi.string().min(3).max(50).required().messages({
      "string.base": "address should be a type of text",
      "string.empty": "address can not be empty",
      "string.min": "address should have at least 3 characters",
      "string.max": "address should not exceed 50 characters",
      "any.required": "address is required",
    }),
    status: Joi.number().integer().min(1).max(4).required().messages({
      "number.base": "status should be a type of number",
      "number.integer": "Status must be integer",
      "number.min": "Status must be at least 1",
      "number.max": "Status must be at most 4",
      "any.required": "Status is required",
    }),
    branchId: Joi.string().hex().length(24).required(),
  });

  const options = { abortEarly: false, allowUnknown: false };
  return supplierSchema.validate(data, options); // Return async validation
};
