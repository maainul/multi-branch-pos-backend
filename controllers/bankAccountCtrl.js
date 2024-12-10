import {
  createBankAccountService,
  deleteBankAccountService,
  listBankAccountService,
  showBankAccountService,
  updateBankAccountService,
  updateBankAccountStatusService,
} from "../services/bankAccountService.js";
import { sendResponse } from "../utils/responseHelper.js";

export const listBankAccountCtrl = async (req, res, next) => {
  try {
    const bankAccounts = await listBankAccountService();
    sendResponse(
      res,
      200,
      "Bank Account list retrieved successfully",
      bankAccounts
    );
  } catch (error) {
    next(error);
  }
};

export const createBankAccountCtrl = async (req, res, next) => {
  try {
    const newbankAccount = await createBankAccountService(req.body);
    sendResponse(res, 201, "Brance added successfully", newbankAccount);
  } catch (error) {
    next(error);
  }
};

export const showBankAccountCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bankAccount = await showBankAccountService(id);
    sendResponse(res, 200, "bankAccount retrieved successfully", bankAccount);
  } catch (error) {
    next(error);
  }
};

export const updateBankAccountCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedbankAccount = await updateBankAccountService(id, req.body);
    sendResponse(
      res,
      200,
      "bankAccount updated successfully",
      updatedbankAccount
    );
  } catch (error) {
    next(error);
  }
};

export const deleteBankAccountCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedbankAccount = await deleteBankAccountService(id);
    sendResponse(
      res,
      200,
      "bankAccount deleted successfully",
      deletedbankAccount
    );
  } catch (error) {
    next(error);
  }
};

export const updateBankAccountStatusCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required to update the bankAccount",
      });
    }

    const updatebankAccount = await updateBankAccountStatusService(id, status);
    sendResponse(
      res,
      200,
      "bankAccount status updated successfully",
      updatebankAccount
    );
  } catch (error) {
    next(error);
  }
};
