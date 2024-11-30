import {
  createExpenseService,
  deleteExpenseService,
  listExpenseService,
  showExpenseService,
  updateExpenseService,
  updateExpenseStatusService,
} from "../services/expenseService.js";
import { sendResponse } from "../utils/responseHelper.js";

export const listExpenseCtrl = async (req, res, next) => {
  try {
    const branches = await listExpenseService();
    sendResponse(res, 200, "Branch list retrieved successfully", branches);
  } catch (error) {
    next(error);
  }
};

export const createExpenseCtrl = async (req, res, next) => {
  try {
    const newBranch = await createExpenseService(req.body);
    sendResponse(res, 201, "Brance added successfully", newBranch);
  } catch (error) {
    next(error);
  }
};

export const showExpenseCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const branch = await showExpenseService(id);
    sendResponse(res, 200, "Branch retrieved successfully", branch);
  } catch (error) {
    next(error);
  }
};

export const updateExpenseCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBranch = await updateExpenseService(id, req.body);
    sendResponse(res, 200, "Branch updated successfully", updatedBranch);
  } catch (error) {
    next(error);
  }
};

export const deleteExpenseCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBranch = await deleteExpenseService(id);
    sendResponse(res, 200, "Branch deleted successfully", deletedBranch);
  } catch (error) {
    next(error);
  }
};

export const updateExpenseStatusCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required to update the branch",
      });
    }

    const updateBranch = await updateExpenseStatusService(id, status);
    sendResponse(res, 200, "Branch status updated successfully", updateBranch);
  } catch (error) {
    next(error);
  }
};
