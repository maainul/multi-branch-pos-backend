import mongoose from "mongoose";

export const validateObjectId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { status: 400, message: "Invalid ID format" };
  }
};
