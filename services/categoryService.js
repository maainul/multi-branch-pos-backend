import { validateCategory } from "../validation/validateCategory.js";
import categoryModel from "../models/categoryModel.js";
import { validateObjectId } from "../utils/validateObjectId.js";

export const createCategoryService = async (categoryData) => {
  const { error, value } = await validateCategory(categoryData);
  if (error) {
    throw {
      status: 400,
      details: error.details.map((detail) => ({
        label: detail.context.label,
        message: detail.message.replace(/"/g, ""),
      })),
    };
  }
  const accountNumberExists = await categoryModel.findOne({
    accountNumber: categoryData.accountNumber,
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
  const newCategory = await categoryModel.create(value);
  return newCategory;
};

export const listCategoryService = async () => {
  try {
    const categoryes = await categoryModel.find();
    return categoryes;
  } catch (error) {
    throw new Error("Error retrieving bank Account from the database");
  }
};

export const showCategoryService = async (categoryId) => {
  try {
    validateObjectId(categoryId);
    const category = await categoryModel.findById(categoryId);
    if (!category) {
      throw { status: 404, message: "Bank Account not found" };
    }
    return category;
  } catch (error) {
    throw error;
  }
};

export const updateCategoryService = async (
  categoryId,
  categoryData
) => {
  validateObjectId(categoryId);

  // Find and update the category
  const updatedCategory = await categoryModel.findByIdAndUpdate(
    categoryId,
    categoryData,
    {
      new: true, // Return the updated document
      runValidators: true, // Ensure Mongoose validators run
    }
  );
  if (!updatedCategory) {
    throw { status: 404, message: "Bank Account not found" };
  }
  return updatedCategory;
};

export const updateCategoryStatusService = async (categoryId, status) => {
  validateObjectId(categoryId);

  // Validate the 'status' input
  if (typeof status !== "number" || isNaN(status)) {
    throw {
      status: 400,
      message: "Invalid status value. Status must be a valid number.",
    };
  }

  // Update the category status
  const updatedCategory = await categoryModel.findByIdAndUpdate(
    categoryId,
    { status }, // Use the status directly as it's validated
    { new: true, runValidators: true }
  );

  // Handle category not found
  if (!updatedCategory) {
    throw { status: 404, message: "Bank Account not found" };
  }

  // Return the updated category
  return updatedCategory;
};

export const deleteCategoryService = async (categoryId) => {
  validateObjectId(categoryId);

  // Attempt to delete the category
  const deletedCategory = await categoryModel.findByIdAndDelete(
    categoryId
  );

  // If category not found, throw a 404 error
  if (!deletedCategory) {
    throw { status: 404, message: "Category not found" };
  }

  // Return the deleted category
  return deletedCategory;
};
