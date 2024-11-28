import { validateBranch } from "../validation/validateBranch.js";
import branchModel from "../models/branchModel.js";
import { validateObjectId } from "../utils/validateObjectId.js";

export const createBranchService = async (branchData) => {
  const { error, value } = await validateBranch(branchData);
  if (error) {
    throw {
      status: 400,
      details: error.details.map((detail) => ({
        label: detail.context.label,
        message: detail.message.replace(/"/g, ""),
      })),
    };
  }
  const nameExists = await branchModel.findOne({
    branch_name: branchData.branch_name,
  });
  if (nameExists) {
    throw {
      status: 400,
      details: [
        {
          label: "branch_name",
          message: "Branch Name Already Exists",
        },
      ],
    };
  }
  const newBranch = await branchModel.create(value);
  return newBranch;
};

export const listBranchService = async () => {
  try {
    const branches = await branchModel.find();
    return branches;
  } catch (error) {
    throw new Error("Error retrieving branches from the database");
  }
};

export const showBranchService = async (branchId) => {
  try {
    validateObjectId(branchId);
    const branch = await branchModel.findById(branchId);
    if (!branch) {
      throw { status: 404, message: "Branch not found" };
    }
    return branch;
  } catch (error) {
    throw error;
  }
};

export const updateBranchService = async (branchId, branchData) => {
  validateObjectId(branchId);

  // Find and update the branch
  const updatedBranch = await branchModel.findByIdAndUpdate(
    branchId,
    branchData,
    {
      new: true, // Return the updated document
      runValidators: true, // Ensure Mongoose validators run
    }
  );
  if (!updatedBranch) {
    throw { status: 404, message: "Branch not found" };
  }
  return updatedBranch;
};

export const updateBranchStatusService = async (branchId, status) => {
  validateObjectId(branchId);

  // Validate the 'status' input
  if (typeof status !== "number" || isNaN(status)) {
    throw {
      status: 400,
      message: "Invalid status value. Status must be a valid number.",
    };
  }

  // Update the branch status
  const updatedBranch = await branchModel.findByIdAndUpdate(
    branchId,
    { status }, // Use the status directly as it's validated
    { new: true, runValidators: true }
  );

  // Handle branch not found
  if (!updatedBranch) {
    throw { status: 404, message: "Branch not found" };
  }

  // Return the updated branch
  return updatedBranch;
};

export const deleteBranchService = async (branchId) => {
  validateObjectId(branchId);

  // Attempt to delete the branch
  const deletedBranch = await branchModel.findByIdAndDelete(branchId);

  // If branch not found, throw a 404 error
  if (!deletedBranch) {
    throw { status: 404, message: "Branch not found" };
  }

  // Return the deleted branch
  return deletedBranch;
};
