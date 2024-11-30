import { validateGift } from "../validation/validateGift.js";
import giftModel from "../models/giftModel.js";
import { validateObjectId } from "../utils/validateObjectId.js";

export const createGiftService = async (giftData) => {
  const { error, value } = await validateGift(giftData);
  if (error) {
    throw {
      status: 400,
      details: error.details.map((detail) => ({
        label: detail.context.label,
        message: detail.message.replace(/"/g, ""),
      })),
    };
  }
  const accountNumberExists = await giftModel.findOne({
    accountNumber: giftData.accountNumber,
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
  const newGift = await giftModel.create(value);
  return newGift;
};

export const listGiftService = async () => {
  try {
    const giftes = await giftModel.find();
    return giftes;
  } catch (error) {
    throw new Error("Error retrieving bank Account from the database");
  }
};

export const showGiftService = async (giftId) => {
  try {
    validateObjectId(giftId);
    const gift = await giftModel.findById(giftId);
    if (!gift) {
      throw { status: 404, message: "Bank Account not found" };
    }
    return gift;
  } catch (error) {
    throw error;
  }
};

export const updateGiftService = async (
  giftId,
  giftData
) => {
  validateObjectId(giftId);

  // Find and update the gift
  const updatedGift = await giftModel.findByIdAndUpdate(
    giftId,
    giftData,
    {
      new: true, // Return the updated document
      runValidators: true, // Ensure Mongoose validators run
    }
  );
  if (!updatedGift) {
    throw { status: 404, message: "Bank Account not found" };
  }
  return updatedGift;
};

export const updateGiftStatusService = async (giftId, status) => {
  validateObjectId(giftId);

  // Validate the 'status' input
  if (typeof status !== "number" || isNaN(status)) {
    throw {
      status: 400,
      message: "Invalid status value. Status must be a valid number.",
    };
  }

  // Update the gift status
  const updatedGift = await giftModel.findByIdAndUpdate(
    giftId,
    { status }, // Use the status directly as it's validated
    { new: true, runValidators: true }
  );

  // Handle gift not found
  if (!updatedGift) {
    throw { status: 404, message: "Bank Account not found" };
  }

  // Return the updated gift
  return updatedGift;
};

export const deleteGiftService = async (giftId) => {
  validateObjectId(giftId);

  // Attempt to delete the gift
  const deletedGift = await giftModel.findByIdAndDelete(
    giftId
  );

  // If gift not found, throw a 404 error
  if (!deletedGift) {
    throw { status: 404, message: "Gift not found" };
  }

  // Return the deleted gift
  return deletedGift;
};
