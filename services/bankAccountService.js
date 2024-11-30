import { validateBankAccount } from "../validation/validateBankAccount.js";
import bankAccountModel from "../models/bankAccountModel.js";
import { validateObjectId } from "../utils/validateObjectId.js";

export const createBankAccountService = async (bankAccountData) => {
  const { error, value } = await validateBankAccount(bankAccountData);
  if (error) {
    throw {
      status: 400,
      details: error.details.map((detail) => ({
        label: detail.context.label,
        message: detail.message.replace(/"/g, ""),
      })),
    };
  }
  const accountNumberExists = await bankAccountModel.findOne({
    accountNumber: bankAccountData.accountNumber,
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
  const newBankAccount = await bankAccountModel.create(value);
  return newBankAccount;
};

export const listBankAccountService = async () => {
  try {
    const bankAccountes = await bankAccountModel.find();
    return bankAccountes;
  } catch (error) {
    throw new Error("Error retrieving bank Account from the database");
  }
};

export const showBankAccountService = async (bankAccountId) => {
  try {
    validateObjectId(bankAccountId);
    const bankAccount = await bankAccountModel.findById(bankAccountId);
    if (!bankAccount) {
      throw { status: 404, message: "Bank Account not found" };
    }
    return bankAccount;
  } catch (error) {
    throw error;
  }
};

export const updateBankAccountService = async (
  bankAccountId,
  bankAccountData
) => {
  validateObjectId(bankAccountId);

  // Find and update the bankAccount
  const updatedBankAccount = await bankAccountModel.findByIdAndUpdate(
    bankAccountId,
    bankAccountData,
    {
      new: true, // Return the updated document
      runValidators: true, // Ensure Mongoose validators run
    }
  );
  if (!updatedBankAccount) {
    throw { status: 404, message: "Bank Account not found" };
  }
  return updatedBankAccount;
};

export const updateBankAccountStatusService = async (bankAccountId, status) => {
  validateObjectId(bankAccountId);

  // Validate the 'status' input
  if (typeof status !== "number" || isNaN(status)) {
    throw {
      status: 400,
      message: "Invalid status value. Status must be a valid number.",
    };
  }

  // Update the bankAccount status
  const updatedBankAccount = await bankAccountModel.findByIdAndUpdate(
    bankAccountId,
    { status }, // Use the status directly as it's validated
    { new: true, runValidators: true }
  );

  // Handle bankAccount not found
  if (!updatedBankAccount) {
    throw { status: 404, message: "Bank Account not found" };
  }

  // Return the updated bankAccount
  return updatedBankAccount;
};

export const deleteBankAccountService = async (bankAccountId) => {
  validateObjectId(bankAccountId);

  // Attempt to delete the bankAccount
  const deletedBankAccount = await bankAccountModel.findByIdAndDelete(
    bankAccountId
  );

  // If bankAccount not found, throw a 404 error
  if (!deletedBankAccount) {
    throw { status: 404, message: "BankAccount not found" };
  }

  // Return the deleted bankAccount
  return deletedBankAccount;
};
