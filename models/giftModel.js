import mongoose from "mongoose";

const giftSchema = new mongoose.Schema(
  {
    giftName: {
      type: String,
      require: true,
    },
    giftQuantity: {
      type: Number,
      require: true,
    },
    stock: {
      type: Number,
      require: true,
    },
    expDate: {
      type: Date,
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
    supplierId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Gift", giftSchema);
