import { 
  createBankAccountService, 
  deleteBankAccountService, 
  listBankAccountService, 
  showBankAccountService, 
  updateBankAccountService, 
  updateBankAccountStatusService } from "../services/bankAccountService.js";
import { sendResponse } from "../utils/responseHelper.js";

export const listBankAccountCtrl = async (req, res, next) => {
  try {
    const branches = await listBankAccountService();
    sendResponse(res, 200, "Branch list retrieved successfully", branches);
  } catch (error) {
    next(error);
  }
};

export const createBankAccountCtrl = async (req, res,next) => {
  try {
    const newBranch = await createBankAccountService(req.body);
    sendResponse(res, 201, "Brance added successfully", newBranch);
  } catch (error) {
    next(error);
  }
};

export const showBankAccountCtrl = async (req, res,next) => {
  try {
    const { id } = req.params;
    const branch = await showBankAccountService(id);
    sendResponse(res, 200, "Branch retrieved successfully", branch);
  } catch (error) {
    next(error);
  }
};

export const updateBankAccountCtrl = async (req, res,next) => {
  try {
    const { id } = req.params;
    const updatedBranch = await updateBankAccountService(id, req.body);
    sendResponse(res, 200, "Branch updated successfully", updatedBranch);
  } catch (error) {
    next(error);
  }
};

export const deleteBankAccountCtrl = async (req, res,next) => {
  try {
    const { id } = req.params;
    const deletedBranch = await deleteBankAccountService(id);
    sendResponse(res, 200, "Branch deleted successfully", deletedBranch);
  } catch (error) {
    next(error);
  }
};

export const updateBankAccountStatusCtrl = async (req, res,next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required to update the branch",
      });
    }

    const updateBranch = await updateBankAccountStatusService(id, status);
    sendResponse(res, 200, "Branch status updated successfully", updateBranch);
  } catch (error) {
    next(error);
  }
};
