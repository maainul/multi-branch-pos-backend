import {
  createAssetsService,
  deleteAssetsService,
  listAssetsService,
  showAssetsService,
  updateAssetsService,
  updateAssetsStatusService,
} from "../services/assetsService.js";
import { sendResponse } from "../utils/responseHelper.js";

export const listAssetsCtrl = async (req, res, next) => {
  try {
    const branches = await listAssetsService();
    sendResponse(res, 200, "Branch list retrieved successfully", branches);
  } catch (error) {
    next(error);
  }
};

export const createAssetsCtrl = async (req, res, next) => {
  try {
    const newBranch = await createAssetsService(req.body);
    sendResponse(res, 201, "Brance added successfully", newBranch);
  } catch (error) {
    next(error);
  }
};

export const showAssetsCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const branch = await showAssetsService(id);
    sendResponse(res, 200, "Branch retrieved successfully", branch);
  } catch (error) {
    next(error);
  }
};

export const updateAssetsCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBranch = await updateAssetsService(id, req.body);
    sendResponse(res, 200, "Branch updated successfully", updatedBranch);
  } catch (error) {
    next(error);
  }
};

export const deleteAssetsCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBranch = await deleteAssetsService(id);
    sendResponse(res, 200, "Branch deleted successfully", deletedBranch);
  } catch (error) {
    next(error);
  }
};

export const updateAssetsStatusCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required to update the branch",
      });
    }

    const updateBranch = await updateAssetsStatusService(id, status);
    sendResponse(res, 200, "Branch status updated successfully", updateBranch);
  } catch (error) {
    next(error);
  }
};
