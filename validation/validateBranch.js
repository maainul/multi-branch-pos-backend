import Joi from "joi";


export const validateBranch = async (data) => {

  const branchSchema = Joi.object({
    branch_name: Joi.string()
      .min(3)
      .max(50)
      .required()
      .messages({
        "string.base": "Branch name should be a type of text",
        "string.empty": "Branch name can not be empty",
        "string.min": "Branch name should have at least 3 characters",
        "string.max": "Branch name should not exceed 50 characters",
        "any.required": "Branch name is required",
      }),
    branch_phone: Joi.string().min(5).max(12).required().messages({
      "string.base": "Branch Phone should be a type of text",
      "string.empty": "Branch Phone can not be empty",
      "string.min": "Branch Phone should have at least 5 characters",
      "string.max": "Branch Phone should not exceed 12 characters",
      "any.required": "Branch Phone is required",
    }),
    branch_email: Joi.string().email().max(100).required().messages({
      "string.base": "Branch email should be a type of text",
      "string.empty": "Branch email can not be empty",
      "string.email": "Branch email must be a valid email",
      "string.max": "Branch email should not exceed 100 characters",
      "any.required": "Branch email is required",
    }),
    branch_address: Joi.string().min(10).max(200).required().messages({
      "string.base": "Branch address should be a type of text",
      "string.empty": "Branch address can not be empty",
      "string.min": "Branch address should have at least 10 characters",
      "string.max": "Branch address should not exceed 200 characters",
      "any.required": "Branch address is required",
    }),
    branch_location: Joi.string().min(5).max(100).required().messages({
      "string.base": "Branch location should be a type of text",
      "string.empty": "Branch location can not be empty",
      "string.min": "Branch location should have at least 5 characters",
      "string.max": "Branch location should not exceed 100 characters",
      "any.required": "Branch location is required",
    }),
    open_date: Joi.date().required().messages({
      "date.base": "Open Date should be valid date",
      "any.required": "Open Date is required",
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
  return branchSchema.validate(data, options); // Return async validation
};
