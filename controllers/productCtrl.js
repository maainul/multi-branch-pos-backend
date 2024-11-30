import {
  createProductService,
  deleteProductService,
  listProductService,
  showProductService,
  updateProductService,
  updateProductStatusService,
} from "../services/productService.js";
import { sendResponse } from "../utils/responseHelper.js";

export const listProductCtrl = async (req, res, next) => {
  try {
    const branches = await listProductService();
    sendResponse(res, 200, "Branch list retrieved successfully", branches);
  } catch (error) {
    next(error);
  }
};

export const createProductCtrl = async (req, res, next) => {
  try {
    const newBranch = await createProductService(req.body);
    sendResponse(res, 201, "Brance added successfully", newBranch);
  } catch (error) {
    next(error);
  }
};

export const showProductCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const branch = await showProductService(id);
    sendResponse(res, 200, "Branch retrieved successfully", branch);
  } catch (error) {
    next(error);
  }
};

export const updateProductCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBranch = await updateProductService(id, req.body);
    sendResponse(res, 200, "Branch updated successfully", updatedBranch);
  } catch (error) {
    next(error);
  }
};

export const deleteProductCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBranch = await deleteProductService(id);
    sendResponse(res, 200, "Branch deleted successfully", deletedBranch);
  } catch (error) {
    next(error);
  }
};

export const updateProductStatusCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required to update the branch",
      });
    }

    const updateBranch = await updateProductStatusService(id, status);
    sendResponse(res, 200, "Branch status updated successfully", updateBranch);
  } catch (error) {
    next(error);
  }
};
