import mongoose from "mongoose";

const bankAccountSchema = new mongoose.Schema(
  {
    accountType: {
      type: Number,
      require: true,
    },
    accountHolder: {
      type: String,
      require: true,
    },
    accountNumber: {
      type: String,
      require: true,
    },
    totalAmount: {
      type: Number,
      require: true,
    },
    openDate: {
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
  },
  { timestamps: true }
);

export default mongoose.model("BankAccount", bankAccountSchema);
