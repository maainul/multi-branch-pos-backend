import {
  createEmployeeService,
  deleteEmployeeService,
  listEmployeeService,
  showEmployeeService,
  updateEmployeeService,
  updateEmployeeStatusService,
} from "../services/employeeService.js";
import { sendResponse } from "../utils/responseHelper.js";

export const listEmployeeCtrl = async (req, res, next) => {
  try {
    const branches = await listEmployeeService();
    sendResponse(res, 200, "Branch list retrieved successfully", branches);
  } catch (error) {
    next(error);
  }
};

export const createEmployeeCtrl = async (req, res, next) => {
  try {
    const newBranch = await createEmployeeService(req.body);
    sendResponse(res, 201, "Brance added successfully", newBranch);
  } catch (error) {
    next(error);
  }
};

export const showEmployeeCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const branch = await showEmployeeService(id);
    sendResponse(res, 200, "Branch retrieved successfully", branch);
  } catch (error) {
    next(error);
  }
};

export const updateEmployeeCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBranch = await updateEmployeeService(id, req.body);
    sendResponse(res, 200, "Branch updated successfully", updatedBranch);
  } catch (error) {
    next(error);
  }
};

export const deleteEmployeeCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBranch = await deleteEmployeeService(id);
    sendResponse(res, 200, "Branch deleted successfully", deletedBranch);
  } catch (error) {
    next(error);
  }
};

export const updateEmployeeStatusCtrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required to update the branch",
      });
    }

    const updateBranch = await updateEmployeeStatusService(id, status);
    sendResponse(res, 200, "Branch status updated successfully", updateBranch);
  } catch (error) {
    next(error);
  }
};
