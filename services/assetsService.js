import { validateAsset } from "../validation/validateAsset.js";
import assetModel from "../models/assetModel.js";
import { validateObjectId } from "../utils/validateObjectId.js";

export const createAssetsService = async (assetsData) => {
  const { error, value } = await validateAsset(assetsData);
  if (error) {
    throw {
      status: 400,
      details: error.details.map((detail) => ({
        label: detail.context.label,
        message: detail.message.replace(/"/g, ""),
      })),
    };
  }
  const accountNumberExists = await assetModel.findOne({
    accountNumber: assetsData.accountNumber,
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
  const newAssets = await assetModel.create(value);
  return newAssets;
};

export const listAssetsService = async () => {
  try {
    const assetses = await assetModel.find();
    return assetses;
  } catch (error) {
    throw new Error("Error retrieving bank Account from the database");
  }
};

export const showAssetsService = async (assetsId) => {
  try {
    validateObjectId(assetsId);
    const assets = await assetModel.findById(assetsId);
    if (!assets) {
      throw { status: 404, message: "Bank Account not found" };
    }
    return assets;
  } catch (error) {
    throw error;
  }
};

export const updateAssetsService = async (
  assetsId,
  assetsData
) => {
  validateObjectId(assetsId);

  // Find and update the assets
  const updatedAssets = await assetModel.findByIdAndUpdate(
    assetsId,
    assetsData,
    {
      new: true, // Return the updated document
      runValidators: true, // Ensure Mongoose validators run
    }
  );
  if (!updatedAssets) {
    throw { status: 404, message: "Bank Account not found" };
  }
  return updatedAssets;
};

export const updateAssetsStatusService = async (assetsId, status) => {
  validateObjectId(assetsId);

  // Validate the 'status' input
  if (typeof status !== "number" || isNaN(status)) {
    throw {
      status: 400,
      message: "Invalid status value. Status must be a valid number.",
    };
  }

  // Update the assets status
  const updatedAssets = await assetModel.findByIdAndUpdate(
    assetsId,
    { status }, // Use the status directly as it's validated
    { new: true, runValidators: true }
  );

  // Handle assets not found
  if (!updatedAssets) {
    throw { status: 404, message: "Bank Account not found" };
  }

  // Return the updated assets
  return updatedAssets;
};

export const deleteAssetsService = async (assetsId) => {
  validateObjectId(assetsId);

  // Attempt to delete the assets
  const deletedAssets = await assetModel.findByIdAndDelete(
    assetsId
  );

  // If assets not found, throw a 404 error
  if (!deletedAssets) {
    throw { status: 404, message: "Assets not found" };
  }

  // Return the deleted assets
  return deletedAssets;
};
