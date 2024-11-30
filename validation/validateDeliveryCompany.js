import Joi from "joi";

export const validateDeliveryCompany = async (data) => {
  const deliveryCompanySchema = Joi.object({
    name: Joi.string().min(3).max(50).required().messages({
      "string.base": "name should be a type of text",
      "string.empty": "name can not be empty",
      "string.min": "name should have at least 3 characters",
      "string.max": "name should not exceed 50 characters",
      "any.required": "name is required",
    }),
    phone: Joi.string().min(11).max(12).required().messages({
      "string.base": "Phone should be a type of text",
      "string.empty": "Phone can not be empty",
      "string.min": "Phone should have at least 11 characters",
      "string.max": "Phone should not exceed 12 characters",
      "any.required": "Phone is required",
    }),
    email: Joi.string().email().max(100).required().messages({
      "string.base": "email should be a type of text",
      "string.empty": "email can not be empty",
      "string.email": "email must be a valid email",
      "string.max": "email should not exceed 100 characters",
      "any.required": "email is required",
    }),
    address: Joi.string().min(10).max(200).required().messages({
      "string.base": "address should be a type of text",
      "string.empty": "address can not be empty",
      "string.min": "address should have at least 10 characters",
      "string.max": "address should not exceed 200 characters",
      "any.required": "address is required",
    }),
    status: Joi.number().integer().min(1).max(4).required().messages({
      "number.base": "status should be a type of number",
      "number.integer": "Status must be integer",
      "number.min": "Status must be at least 1",
      "number.max": "Status must be at most 4",
      "any.required": "Status is required",
    }),
  });

  const options = { abortEarly: false, allowUnknown: false };
  return deliveryCompanySchema.validate(data, options); // Return async validation
};
