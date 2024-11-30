import { validateSupplier } from "../validation/validateSupplier.js";
import supplierModel from "../models/supplierModel.js";
import { validateObjectId } from "../utils/validateObjectId.js";

export const createSupplierService = async (supplierData) => {
  const { error, value } = await validateSupplier(supplierData);
  if (error) {
    throw {
      status: 400,
      details: error.details.map((detail) => ({
        label: detail.context.label,
        message: detail.message.replace(/"/g, ""),
      })),
    };
  }
  const accountNumberExists = await supplierModel.findOne({
    accountNumber: supplierData.accountNumber,
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
  const newSupplier = await supplierModel.create(value);
  return newSupplier;
};

export const listSupplierService = async () => {
  try {
    const supplieres = await supplierModel.find();
    return supplieres;
  } catch (error) {
    throw new Error("Error retrieving bank Account from the database");
  }
};

export const showSupplierService = async (supplierId) => {
  try {
    validateObjectId(supplierId);
    const supplier = await supplierModel.findById(supplierId);
    if (!supplier) {
      throw { status: 404, message: "Bank Account not found" };
    }
    return supplier;
  } catch (error) {
    throw error;
  }
};

export const updateSupplierService = async (
  supplierId,
  supplierData
) => {
  validateObjectId(supplierId);

  // Find and update the supplier
  const updatedSupplier = await supplierModel.findByIdAndUpdate(
    supplierId,
    supplierData,
    {
      new: true, // Return the updated document
      runValidators: true, // Ensure Mongoose validators run
    }
  );
  if (!updatedSupplier) {
    throw { status: 404, message: "Bank Account not found" };
  }
  return updatedSupplier;
};

export const updateSupplierStatusService = async (supplierId, status) => {
  validateObjectId(supplierId);

  // Validate the 'status' input
  if (typeof status !== "number" || isNaN(status)) {
    throw {
      status: 400,
      message: "Invalid status value. Status must be a valid number.",
    };
  }

  // Update the supplier status
  const updatedSupplier = await supplierModel.findByIdAndUpdate(
    supplierId,
    { status }, // Use the status directly as it's validated
    { new: true, runValidators: true }
  );

  // Handle supplier not found
  if (!updatedSupplier) {
    throw { status: 404, message: "Bank Account not found" };
  }

  // Return the updated supplier
  return updatedSupplier;
};

export const deleteSupplierService = async (supplierId) => {
  validateObjectId(supplierId);

  // Attempt to delete the supplier
  const deletedSupplier = await supplierModel.findByIdAndDelete(
    supplierId
  );

  // If supplier not found, throw a 404 error
  if (!deletedSupplier) {
    throw { status: 404, message: "Supplier not found" };
  }

  // Return the deleted supplier
  return deletedSupplier;
};
