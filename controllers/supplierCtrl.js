import {
  createSupplierService,
  deleteSupplierService,
  listSupplierService,
  showSupplierService,
  updateSupplierService,
  updateSupplierStatusService,
} from "../services/supplierService.js";
import { sendResponse } from "../utils/responseHelper.js";

export const listSupplierCtrl = async (req, res, next) => {
  try {
    const branches = await listSupplierService();
    sendResponse(res, 200, "Branch list retrieved successfully", branches);
  } catch (error) {
    next(error);
  }
};

export const createSupplierCtrl = async (req, res, next) => {
  try {
    const newBranch = await createSupplierService(req.body);
    sendResponse(res, 201, "Brance added successfully", newBranch);
  } catch (error) {
    next(error);
  }
};

export const showSupplierCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const branch = await showSupplierService(id);
    sendResponse(res, 200, "Branch retrieved successfully", branch);
  } catch (error) {
    next(error);
  }
};

export const updateSupplierCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBranch = await updateSupplierService(id, req.body);
    sendResponse(res, 200, "Branch updated successfully", updatedBranch);
  } catch (error) {
    next(error);
  }
};

export const deleteSupplierCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBranch = await deleteSupplierService(id);
    sendResponse(res, 200, "Branch deleted successfully", deletedBranch);
  } catch (error) {
    next(error);
  }
};

export const updateSupplierStatusCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required to update the branch",
      });
    }

    const updateBranch = await updateSupplierStatusService(id, status);
    sendResponse(res, 200, "Branch status updated successfully", updateBranch);
  } catch (error) {
    next(error);
  }
};
