import Joi from "joi";

export const validateBankAccount = async (data) => {
  const bankAccountSchema = Joi.object({
    accountHolder: Joi.string().min(3).max(50).required().messages({
      "string.base": "accountHolder name should be a type of text",
      "string.empty": "accountHolder name can not be empty",
      "string.min": "accountHolder name should have at least 3 characters",
      "string.max": "accountHolder name should not exceed 50 characters",
      "any.required": "accountHolder name is required",
    }),
    accountType: Joi.number().integer().min(1).max(10).required().messages({
      "number.base": "accountType should be a type of number",
      "number.integer": "accountType must be integer",
      "number.min": "accountType must be at least 1",
      "number.max": "accountType must be at most 4",
      "any.required": "accountType is required",
    }),
    accountNumber: Joi.string().min(5).max(12).required().messages({
      "string.base": "accountNumber  should be a type of text",
      "string.empty": "accountNumber  can not be empty",
      "string.min": "accountNumber  should have at least 5 characters",
      "string.max": "accountNumber  should not exceed 12 characters",
      "any.required": "accountNumber  is required",
    }),
    totalAmount: Joi.number()
      .integer()
      .min(1)
      .max(400000000)
      .required()
      .messages({
        "number.base": "totalAmount should be a type of number",
        "number.integer": "totalAmount must be integer",
        "number.min": "totalAmount must be at least 1",
        "number.max": "totalAmount must be at most 400000000",
        "any.required": "totalAmount is required",
      }),
    openDate: Joi.date().required().messages({
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
    branchId: Joi.string().hex().length(24).required(),
  });

  const options = { abortEarly: false, allowUnknown: false };
  return bankAccountSchema.validate(data, options); // Return async validation
};
