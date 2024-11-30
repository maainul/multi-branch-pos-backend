import {
  createSubCategoryService,
  deleteSubCategoryService,
  listSubCategoryService,
  showSubCategoryService,
  updateSubCategoryService,
  updateSubCategoryStatusService,
} from "../services/subCategoryService.js";
import { sendResponse } from "../utils/responseHelper.js";

export const listSubCategoryCtrl = async (req, res, next) => {
  try {
    const branches = await listSubCategoryService();
    sendResponse(res, 200, "Branch list retrieved successfully", branches);
  } catch (error) {
    next(error);
  }
};

export const createSubCategoryCtrl = async (req, res, next) => {
  try {
    const newBranch = await createSubCategoryService(req.body);
    sendResponse(res, 201, "Brance added successfully", newBranch);
  } catch (error) {
    next(error);
  }
};

export const showSubCategoryCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const branch = await showSubCategoryService(id);
    sendResponse(res, 200, "Branch retrieved successfully", branch);
  } catch (error) {
    next(error);
  }
};

export const updateSubCategoryCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBranch = await updateSubCategoryService(id, req.body);
    sendResponse(res, 200, "Branch updated successfully", updatedBranch);
  } catch (error) {
    next(error);
  }
};

export const deleteSubCategoryCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBranch = await deleteSubCategoryService(id);
    sendResponse(res, 200, "Branch deleted successfully", deletedBranch);
  } catch (error) {
    next(error);
  }
};

export const updateSubCategoryStatusCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required to update the branch",
      });
    }

    const updateBranch = await updateSubCategoryStatusService(id, status);
    sendResponse(res, 200, "Branch status updated successfully", updateBranch);
  } catch (error) {
    next(error);
  }
};
