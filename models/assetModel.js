import mongoose from "mongoose";

const assetSchema = new mongoose.Schema(
  {
    assetName: {
      type: String,
      require: true,
    },
    assetQuantity: {
      type: Number,
      require: true,
    },
    assetPrice: {
      type: Number,
      require: true,
    },
    addDate: {
      type: Date,
      require: true,
    },
    assetNote: {
      type: String,
      require: true,
    },
    status: {
      type: Number,
      require: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    branchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Asset", assetSchema);
