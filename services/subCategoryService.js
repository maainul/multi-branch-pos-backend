import { validateSubCategory } from "../validation/validateSubCategory.js";
import subCategoryModel from "../models/subCategoryModel.js";
import { validateObjectId } from "../utils/validateObjectId.js";

export const createSubCategoryService = async (subCategoryData) => {
  const { error, value } = await validateSubCategory(subCategoryData);
  if (error) {
    throw {
      status: 400,
      details: error.details.map((detail) => ({
        label: detail.context.label,
        message: detail.message.replace(/"/g, ""),
      })),
    };
  }
  const accountNumberExists = await subCategoryModel.findOne({
    accountNumber: subCategoryData.accountNumber,
  });
  if (accountNumberExists) {
    throw {
      status: 400,
      details: [
        {
          label: "accountNumber",
          message: "Bank Account Number Already Exists",
        },
      ],
    };
  }
  const newSubCategory = await subCategoryModel.create(value);
  return newSubCategory;
};

export const listSubCategoryService = async () => {
  try {
    const subCategoryes = await subCategoryModel.find();
    return subCategoryes;
  } catch (error) {
    throw new Error("Error retrieving bank Account from the database");
  }
};

export const showSubCategoryService = async (subCategoryId) => {
  try {
    validateObjectId(subCategoryId);
    const subCategory = await subCategoryModel.findById(subCategoryId);
    if (!subCategory) {
      throw { status: 404, message: "Bank Account not found" };
    }
    return subCategory;
  } catch (error) {
    throw error;
  }
};

export const updateSubCategoryService = async (
  subCategoryId,
  subCategoryData
) => {
  validateObjectId(subCategoryId);

  // Find and update the subCategory
  const updatedSubCategory = await subCategoryModel.findByIdAndUpdate(
    subCategoryId,
    subCategoryData,
    {
      new: true, // Return the updated document
      runValidators: true, // Ensure Mongoose validators run
    }
  );
  if (!updatedSubCategory) {
    throw { status: 404, message: "Bank Account not found" };
  }
  return updatedSubCategory;
};

export const updateSubCategoryStatusService = async (subCategoryId, status) => {
  validateObjectId(subCategoryId);

  // Validate the 'status' input
  if (typeof status !== "number" || isNaN(status)) {
    throw {
      status: 400,
      message: "Invalid status value. Status must be a valid number.",
    };
  }

  // Update the subCategory status
  const updatedSubCategory = await subCategoryModel.findByIdAndUpdate(
    subCategoryId,
    { status }, // Use the status directly as it's validated
    { new: true, runValidators: true }
  );

  // Handle subCategory not found
  if (!updatedSubCategory) {
    throw { status: 404, message: "Bank Account not found" };
  }

  // Return the updated subCategory
  return updatedSubCategory;
};

export const deleteSubCategoryService = async (subCategoryId) => {
  validateObjectId(subCategoryId);

  // Attempt to delete the subCategory
  const deletedSubCategory = await subCategoryModel.findByIdAndDelete(
    subCategoryId
  );

  // If subCategory not found, throw a 404 error
  if (!deletedSubCategory) {
    throw { status: 404, message: "SubCategory not found" };
  }

  // Return the deleted subCategory
  return deletedSubCategory;
};
