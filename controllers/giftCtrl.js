import {
  createGiftService,
  deleteGiftService,
  listGiftService,
  showGiftService,
  updateGiftService,
  updateGiftStatusService,
} from "../services/giftService.js";
import { sendResponse } from "../utils/responseHelper.js";

export const listGiftCtrl = async (req, res, next) => {
  try {
    const branches = await listGiftService();
    sendResponse(res, 200, "Branch list retrieved successfully", branches);
  } catch (error) {
    next(error);
  }
};

export const createGiftCtrl = async (req, res, next) => {
  try {
    const newBranch = await createGiftService(req.body);
    sendResponse(res, 201, "Brance added successfully", newBranch);
  } catch (error) {
    next(error);
  }
};

export const showGiftCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const branch = await showGiftService(id);
    sendResponse(res, 200, "Branch retrieved successfully", branch);
  } catch (error) {
    next(error);
  }
};

export const updateGiftCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBranch = await updateGiftService(id, req.body);
    sendResponse(res, 200, "Branch updated successfully", updatedBranch);
  } catch (error) {
    next(error);
  }
};

export const deleteGiftCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBranch = await deleteGiftService(id);
    sendResponse(res, 200, "Branch deleted successfully", deletedBranch);
  } catch (error) {
    next(error);
  }
};

export const updateGiftStatusCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required to update the branch",
      });
    }

    const updateBranch = await updateGiftStatusService(id, status);
    sendResponse(res, 200, "Branch status updated successfully", updateBranch);
  } catch (error) {
    next(error);
  }
};
