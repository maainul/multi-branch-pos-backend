import Joi from "joi";


export const validateCategory = async (data) => {

  const categorySchema = Joi.object({
    name: Joi.string().min(3).max(50).required().messages({
      "string.base": "name should be a type of text",
      "string.empty": "name can not be empty",
      "string.min": "name should have at least 3 characters",
      "string.max": "name should not exceed 50 characters",
      "any.required": "name is required",
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
  return categorySchema.validate(data, options); // Return async validation
};
