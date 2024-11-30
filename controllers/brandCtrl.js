import {
  createBrandService,
  deleteBrandService,
  listBrandService,
  showBrandService,
  updateBrandService,
  updateBrandStatusService,
} from "../services/brandService.js";
import { sendResponse } from "../utils/responseHelper.js";

export const listBrandCtrl = async (req, res, next) => {
  try {
    const branches = await listBrandService();
    sendResponse(res, 200, "Branch list retrieved successfully", branches);
  } catch (error) {
    next(error);
  }
};

export const createBrandCtrl = async (req, res, next) => {
  try {
    const newBranch = await createBrandService(req.body);
    sendResponse(res, 201, "Brance added successfully", newBranch);
  } catch (error) {
    next(error);
  }
};

export const showBrandCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const branch = await showBrandService(id);
    sendResponse(res, 200, "Branch retrieved successfully", branch);
  } catch (error) {
    next(error);
  }
};

export const updateBrandCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBranch = await updateBrandService(id, req.body);
    sendResponse(res, 200, "Branch updated successfully", updatedBranch);
  } catch (error) {
    next(error);
  }
};

export const deleteBrandCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBranch = await deleteBrandService(id);
    sendResponse(res, 200, "Branch deleted successfully", deletedBranch);
  } catch (error) {
    next(error);
  }
};

export const updateBrandStatusCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required to update the branch",
      });
    }

    const updateBranch = await updateBrandStatusService(id, status);
    sendResponse(res, 200, "Branch status updated successfully", updateBranch);
  } catch (error) {
    next(error);
  }
};
