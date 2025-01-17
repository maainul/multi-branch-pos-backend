import {
  createExpenseTypeService,
  deleteExpenseTypeService,
  listExpenseTypeService,
  showExpenseTypeService,
  updateExpenseTypeService,
  updateExpenseTypeStatusService,
} from "../services/expenseTypeService.js";
import { sendResponse } from "../utils/responseHelper.js";

export const listExpenseTypeCtrl = async (req, res, next) => {
  try {
    const branches = await listExpenseTypeService();
    sendResponse(res, 200, "Branch list retrieved successfully", branches);
  } catch (error) {
    next(error);
  }
};

export const createExpenseTypeCtrl = async (req, res, next) => {
  try {
    const newBranch = await createExpenseTypeService(req.body);
    sendResponse(res, 201, "Brance added successfully", newBranch);
  } catch (error) {
    next(error);
  }
};

export const showExpenseTypeCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const branch = await showExpenseTypeService(id);
    sendResponse(res, 200, "Branch retrieved successfully", branch);
  } catch (error) {
    next(error);
  }
};

export const updateExpenseTypeCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBranch = await updateExpenseTypeService(id, req.body);
    sendResponse(res, 200, "Branch updated successfully", updatedBranch);
  } catch (error) {
    next(error);
  }
};

export const deleteExpenseTypeCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBranch = await deleteExpenseTypeService(id);
    sendResponse(res, 200, "Branch deleted successfully", deletedBranch);
  } catch (error) {
    next(error);
  }
};

export const updateExpenseTypeStatusCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required to update the branch",
      });
    }

    const updateBranch = await updateExpenseTypeStatusService(id, status);
    sendResponse(res, 200, "Branch status updated successfully", updateBranch);
  } catch (error) {
    next(error);
  }
};
