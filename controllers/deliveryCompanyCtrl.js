import {
  createDeliveryCompanyService,
  deleteDeliveryCompanyService,
  listDeliveryCompanyService,
  showDeliveryCompanyService,
  updateDeliveryCompanyService,
  updateDeliveryCompanyStatusService,
} from "../services/deliveryCompanyService.js";
import { sendResponse } from "../utils/responseHelper.js";

export const listDeliveryCompanyCtrl = async (req, res, next) => {
  try {
    const branches = await listDeliveryCompanyService();
    sendResponse(res, 200, "Branch list retrieved successfully", branches);
  } catch (error) {
    next(error);
  }
};

export const createDeliveryCompanyCtrl = async (req, res, next) => {
  try {
    const newBranch = await createDeliveryCompanyService(req.body);
    sendResponse(res, 201, "Brance added successfully", newBranch);
  } catch (error) {
    next(error);
  }
};

export const showDeliveryCompanyCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const branch = await showDeliveryCompanyService(id);
    sendResponse(res, 200, "Branch retrieved successfully", branch);
  } catch (error) {
    next(error);
  }
};

export const updateDeliveryCompanyCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBranch = await updateDeliveryCompanyService(id, req.body);
    sendResponse(res, 200, "Branch updated successfully", updatedBranch);
  } catch (error) {
    next(error);
  }
};

export const deleteDeliveryCompanyCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBranch = await deleteDeliveryCompanyService(id);
    sendResponse(res, 200, "Branch deleted successfully", deletedBranch);
  } catch (error) {
    next(error);
  }
};

export const updateDeliveryCompanyStatusCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required to update the branch",
      });
    }

    const updateBranch = await updateDeliveryCompanyStatusService(id, status);
    sendResponse(res, 200, "Branch status updated successfully", updateBranch);
  } catch (error) {
    next(error);
  }
};
