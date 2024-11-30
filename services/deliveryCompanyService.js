import { validateDeliveryCompany } from "../validation/validateDeliveryCompany.js";
import deliveryCompanyModel from "../models/deliveryCompanyModel.js";
import { validateObjectId } from "../utils/validateObjectId.js";

export const createDeliveryCompanyService = async (deliveryCompanyData) => {
  const { error, value } = await validateDeliveryCompany(deliveryCompanyData);
  if (error) {
    throw {
      status: 400,
      details: error.details.map((detail) => ({
        label: detail.context.label,
        message: detail.message.replace(/"/g, ""),
      })),
    };
  }
  const accountNumberExists = await deliveryCompanyModel.findOne({
    accountNumber: deliveryCompanyData.accountNumber,
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
  const newDeliveryCompany = await deliveryCompanyModel.create(value);
  return newDeliveryCompany;
};

export const listDeliveryCompanyService = async () => {
  try {
    const deliveryCompanyes = await deliveryCompanyModel.find();
    return deliveryCompanyes;
  } catch (error) {
    throw new Error("Error retrieving bank Account from the database");
  }
};

export const showDeliveryCompanyService = async (deliveryCompanyId) => {
  try {
    validateObjectId(deliveryCompanyId);
    const deliveryCompany = await deliveryCompanyModel.findById(deliveryCompanyId);
    if (!deliveryCompany) {
      throw { status: 404, message: "Bank Account not found" };
    }
    return deliveryCompany;
  } catch (error) {
    throw error;
  }
};

export const updateDeliveryCompanyService = async (
  deliveryCompanyId,
  deliveryCompanyData
) => {
  validateObjectId(deliveryCompanyId);

  // Find and update the deliveryCompany
  const updatedDeliveryCompany = await deliveryCompanyModel.findByIdAndUpdate(
    deliveryCompanyId,
    deliveryCompanyData,
    {
      new: true, // Return the updated document
      runValidators: true, // Ensure Mongoose validators run
    }
  );
  if (!updatedDeliveryCompany) {
    throw { status: 404, message: "Bank Account not found" };
  }
  return updatedDeliveryCompany;
};

export const updateDeliveryCompanyStatusService = async (deliveryCompanyId, status) => {
  validateObjectId(deliveryCompanyId);

  // Validate the 'status' input
  if (typeof status !== "number" || isNaN(status)) {
    throw {
      status: 400,
      message: "Invalid status value. Status must be a valid number.",
    };
  }

  // Update the deliveryCompany status
  const updatedDeliveryCompany = await deliveryCompanyModel.findByIdAndUpdate(
    deliveryCompanyId,
    { status }, // Use the status directly as it's validated
    { new: true, runValidators: true }
  );

  // Handle deliveryCompany not found
  if (!updatedDeliveryCompany) {
    throw { status: 404, message: "Bank Account not found" };
  }

  // Return the updated deliveryCompany
  return updatedDeliveryCompany;
};

export const deleteDeliveryCompanyService = async (deliveryCompanyId) => {
  validateObjectId(deliveryCompanyId);

  // Attempt to delete the deliveryCompany
  const deletedDeliveryCompany = await deliveryCompanyModel.findByIdAndDelete(
    deliveryCompanyId
  );

  // If deliveryCompany not found, throw a 404 error
  if (!deletedDeliveryCompany) {
    throw { status: 404, message: "DeliveryCompany not found" };
  }

  // Return the deleted deliveryCompany
  return deletedDeliveryCompany;
};
