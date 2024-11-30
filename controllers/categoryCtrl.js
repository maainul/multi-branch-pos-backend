import {
  createCategoryService,
  deleteCategoryService,
  listCategoryService,
  showCategoryService,
  updateCategoryService,
  updateCategoryStatusService,
} from "../services/categoryService.js";
import { sendResponse } from "../utils/responseHelper.js";

export const listCategoryCtrl = async (req, res, next) => {
  try {
    const branches = await listCategoryService();
    sendResponse(res, 200, "Branch list retrieved successfully", branches);
  } catch (error) {
    next(error);
  }
};

export const createCategoryCtrl = async (req, res, next) => {
  try {
    const newBranch = await createCategoryService(req.body);
    sendResponse(res, 201, "Brance added successfully", newBranch);
  } catch (error) {
    next(error);
  }
};

export const showCategoryCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const branch = await showCategoryService(id);
    sendResponse(res, 200, "Branch retrieved successfully", branch);
  } catch (error) {
    next(error);
  }
};

export const updateCategoryCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBranch = await updateCategoryService(id, req.body);
    sendResponse(res, 200, "Branch updated successfully", updatedBranch);
  } catch (error) {
    next(error);
  }
};

export const deleteCategoryCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBranch = await deleteCategoryService(id);
    sendResponse(res, 200, "Branch deleted successfully", deletedBranch);
  } catch (error) {
    next(error);
  }
};

export const updateCategoryStatusCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required to update the branch",
      });
    }

    const updateBranch = await updateCategoryStatusService(id, status);
    sendResponse(res, 200, "Branch status updated successfully", updateBranch);
  } catch (error) {
    next(error);
  }
};
