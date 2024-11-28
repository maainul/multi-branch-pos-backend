import {
  createBranchService,
  deleteBranchService,
  listBranchService,
  showBranchService,
  updateBranchService,
  updateBranchStatusService,
} from "../services/branchService.js";
import { sendResponse } from "../utils/responseHelper.js";

export const listBranchCtrl = async (req, res, next) => {
  try {
    const branches = await listBranchService();
    sendResponse(res, 200, "Branch list retrieved successfully", branches);
  } catch (error) {
    next(error);
  }
};

export const createBranchCtrl = async (req, res, next) => {
  try {
    const newBranch = await createBranchService(req.body);
    sendResponse(res, 201, "Brance added successfully", newBranch);
  } catch (error) {
    next(error);
  }
};

export const showBranchCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const branch = await showBranchService(id);
    sendResponse(res, 200, "Branch retrieved successfully", branch);
  } catch (error) {
    next(error);
  }
};

export const updateBranchCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBranch = await updateBranchService(id, req.body);
    sendResponse(res, 200, "Branch updated successfully", updatedBranch);
  } catch (error) {
    next(error);
  }
};

export const deleteBranchCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBranch = await deleteBranchService(id);
    sendResponse(res, 200, "Branch deleted successfully", deletedBranch);
  } catch (error) {
    next(error);
  }
};

export const updateBranchStatusCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required to update the branch",
      });
    }

    const updateBranch = await updateBranchStatusService(id, status);
    sendResponse(res, 200, "Branch status updated successfully", updateBranch);
  } catch (error) {
    next(error);
  }
};
