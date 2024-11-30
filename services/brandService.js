import { validateBrand } from "../validation/validateBrand.js";
import brandModel from "../models/brandModel.js";
import { validateObjectId } from "../utils/validateObjectId.js";

export const createBrandService = async (brandData) => {
  const { error, value } = await validateBrand(brandData);
  if (error) {
    throw {
      status: 400,
      details: error.details.map((detail) => ({
        label: detail.context.label,
        message: detail.message.replace(/"/g, ""),
      })),
    };
  }
  const accountNumberExists = await brandModel.findOne({
    accountNumber: brandData.accountNumber,
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
  const newBrand = await brandModel.create(value);
  return newBrand;
};

export const listBrandService = async () => {
  try {
    const brandes = await brandModel.find();
    return brandes;
  } catch (error) {
    throw new Error("Error retrieving bank Account from the database");
  }
};

export const showBrandService = async (brandId) => {
  try {
    validateObjectId(brandId);
    const brand = await brandModel.findById(brandId);
    if (!brand) {
      throw { status: 404, message: "Bank Account not found" };
    }
    return brand;
  } catch (error) {
    throw error;
  }
};

export const updateBrandService = async (
  brandId,
  brandData
) => {
  validateObjectId(brandId);

  // Find and update the brand
  const updatedBrand = await brandModel.findByIdAndUpdate(
    brandId,
    brandData,
    {
      new: true, // Return the updated document
      runValidators: true, // Ensure Mongoose validators run
    }
  );
  if (!updatedBrand) {
    throw { status: 404, message: "Bank Account not found" };
  }
  return updatedBrand;
};

export const updateBrandStatusService = async (brandId, status) => {
  validateObjectId(brandId);

  // Validate the 'status' input
  if (typeof status !== "number" || isNaN(status)) {
    throw {
      status: 400,
      message: "Invalid status value. Status must be a valid number.",
    };
  }

  // Update the brand status
  const updatedBrand = await brandModel.findByIdAndUpdate(
    brandId,
    { status }, // Use the status directly as it's validated
    { new: true, runValidators: true }
  );

  // Handle brand not found
  if (!updatedBrand) {
    throw { status: 404, message: "Bank Account not found" };
  }

  // Return the updated brand
  return updatedBrand;
};

export const deleteBrandService = async (brandId) => {
  validateObjectId(brandId);

  // Attempt to delete the brand
  const deletedBrand = await brandModel.findByIdAndDelete(
    brandId
  );

  // If brand not found, throw a 404 error
  if (!deletedBrand) {
    throw { status: 404, message: "Brand not found" };
  }

  // Return the deleted brand
  return deletedBrand;
};
