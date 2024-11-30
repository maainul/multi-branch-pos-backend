import { validateExpenseType } from "../validation/validateExpenseType.js";
import expenseTypeModel from "../models/expenseTypeModel.js";
import { validateObjectId } from "../utils/validateObjectId.js";

export const createExpenseTypeService = async (expenseTypeData) => {
  const { error, value } = await validateExpenseType(expenseTypeData);
  if (error) {
    throw {
      status: 400,
      details: error.details.map((detail) => ({
        label: detail.context.label,
        message: detail.message.replace(/"/g, ""),
      })),
    };
  }
  const accountNumberExists = await expenseTypeModel.findOne({
    accountNumber: expenseTypeData.accountNumber,
  });
  if (accountNumberExists) {
    throw {
      status: 400,
      details: [
        {
          label: "accountNumber",
          message: "Bank Account Number Already Exists",
        },
      ],
    };
  }
  const newExpenseType = await expenseTypeModel.create(value);
  return newExpenseType;
};

export const listExpenseTypeService = async () => {
  try {
    const expenseTypees = await expenseTypeModel.find();
    return expenseTypees;
  } catch (error) {
    throw new Error("Error retrieving bank Account from the database");
  }
};

export const showExpenseTypeService = async (expenseTypeId) => {
  try {
    validateObjectId(expenseTypeId);
    const expenseType = await expenseTypeModel.findById(expenseTypeId);
    if (!expenseType) {
      throw { status: 404, message: "Bank Account not found" };
    }
    return expenseType;
  } catch (error) {
    throw error;
  }
};

export const updateExpenseTypeService = async (
  expenseTypeId,
  expenseTypeData
) => {
  validateObjectId(expenseTypeId);

  // Find and update the expenseType
  const updatedExpenseType = await expenseTypeModel.findByIdAndUpdate(
    expenseTypeId,
    expenseTypeData,
    {
      new: true, // Return the updated document
      runValidators: true, // Ensure Mongoose validators run
    }
  );
  if (!updatedExpenseType) {
    throw { status: 404, message: "Bank Account not found" };
  }
  return updatedExpenseType;
};

export const updateExpenseTypeStatusService = async (expenseTypeId, status) => {
  validateObjectId(expenseTypeId);

  // Validate the 'status' input
  if (typeof status !== "number" || isNaN(status)) {
    throw {
      status: 400,
      message: "Invalid status value. Status must be a valid number.",
    };
  }

  // Update the expenseType status
  const updatedExpenseType = await expenseTypeModel.findByIdAndUpdate(
    expenseTypeId,
    { status }, // Use the status directly as it's validated
    { new: true, runValidators: true }
  );

  // Handle expenseType not found
  if (!updatedExpenseType) {
    throw { status: 404, message: "Bank Account not found" };
  }

  // Return the updated expenseType
  return updatedExpenseType;
};

export const deleteExpenseTypeService = async (expenseTypeId) => {
  validateObjectId(expenseTypeId);

  // Attempt to delete the expenseType
  const deletedExpenseType = await expenseTypeModel.findByIdAndDelete(
    expenseTypeId
  );

  // If expenseType not found, throw a 404 error
  if (!deletedExpenseType) {
    throw { status: 404, message: "ExpenseType not found" };
  }

  // Return the deleted expenseType
  return deletedExpenseType;
};
