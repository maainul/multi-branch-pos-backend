import { validateExpense } from "../validation/validateExpense.js";
import expenseModel from "../models/expenseModel.js";
import { validateObjectId } from "../utils/validateObjectId.js";

export const createExpenseService = async (expenseData) => {
  const { error, value } = await validateExpense(expenseData);
  if (error) {
    throw {
      status: 400,
      details: error.details.map((detail) => ({
        label: detail.context.label,
        message: detail.message.replace(/"/g, ""),
      })),
    };
  }
  const accountNumberExists = await expenseModel.findOne({
    accountNumber: expenseData.accountNumber,
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
  const newExpense = await expenseModel.create(value);
  return newExpense;
};

export const listExpenseService = async () => {
  try {
    const expensees = await expenseModel.find();
    return expensees;
  } catch (error) {
    throw new Error("Error retrieving bank Account from the database");
  }
};

export const showExpenseService = async (expenseId) => {
  try {
    validateObjectId(expenseId);
    const expense = await expenseModel.findById(expenseId);
    if (!expense) {
      throw { status: 404, message: "Bank Account not found" };
    }
    return expense;
  } catch (error) {
    throw error;
  }
};

export const updateExpenseService = async (
  expenseId,
  expenseData
) => {
  validateObjectId(expenseId);

  // Find and update the expense
  const updatedExpense = await expenseModel.findByIdAndUpdate(
    expenseId,
    expenseData,
    {
      new: true, // Return the updated document
      runValidators: true, // Ensure Mongoose validators run
    }
  );
  if (!updatedExpense) {
    throw { status: 404, message: "Bank Account not found" };
  }
  return updatedExpense;
};

export const updateExpenseStatusService = async (expenseId, status) => {
  validateObjectId(expenseId);

  // Validate the 'status' input
  if (typeof status !== "number" || isNaN(status)) {
    throw {
      status: 400,
      message: "Invalid status value. Status must be a valid number.",
    };
  }

  // Update the expense status
  const updatedExpense = await expenseModel.findByIdAndUpdate(
    expenseId,
    { status }, // Use the status directly as it's validated
    { new: true, runValidators: true }
  );

  // Handle expense not found
  if (!updatedExpense) {
    throw { status: 404, message: "Bank Account not found" };
  }

  // Return the updated expense
  return updatedExpense;
};

export const deleteExpenseService = async (expenseId) => {
  validateObjectId(expenseId);

  // Attempt to delete the expense
  const deletedExpense = await expenseModel.findByIdAndDelete(
    expenseId
  );

  // If expense not found, throw a 404 error
  if (!deletedExpense) {
    throw { status: 404, message: "Expense not found" };
  }

  // Return the deleted expense
  return deletedExpense;
};
