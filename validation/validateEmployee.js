import Joi from "joi";

export const validateEmployee = async (data) => {
  const employeeSchema = Joi.object({
    expanseName: Joi.string().min(3).max(50).required().messages({
      "string.base": "name should be a type of text",
      "string.empty": "name can not be empty",
      "string.min": "name should have at least 3 characters",
      "string.max": "name should not exceed 50 characters",
      "any.required": "name is required",
    }),
    reference: Joi.string().min(11).max(12).required().messages({
      "string.base": "Phone should be a type of text",
      "string.empty": "Phone can not be empty",
      "string.min": "Phone should have at least 11 characters",
      "string.max": "Phone should not exceed 12 characters",
      "any.required": "Phone is required",
    }),
    expanseAmount: Joi.number()
      .integer()
      .min(1)
      .max(400000)
      .required()
      .messages({
        "number.base": "expanse Amount should be a type of number",
        "number.integer": "expanse Amount must be integer",
        "number.min": "expanse Amount must be at least 1",
        "number.max": "expanse Amount must be at most 400000",
        "any.required": "expanse Amount is required",
      }),
    expanseDate: Joi.date().required().messages({
      "date.base": "Date should be valid date",
      "any.required": "Date is required",
    }),
    status: Joi.number().integer().min(1).max(4).required().messages({
      "number.base": "status should be a type of number",
      "number.integer": "Status must be integer",
      "number.min": "Status must be at least 1",
      "number.max": "Status must be at most 4",
      "any.required": "Status is required",
    }),
    accountId: Joi.string().required(),
    branchId: Joi.string().hex().length(24).required(),
  });

  const options = { abortEarly: false, allowUnknown: false };
  return employeeSchema.validate(data, options); // Return async validation
};
