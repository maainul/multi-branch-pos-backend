import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    accountId: {
      type: String,
      require: true,
    },
    expanseName: {
      type: String,
      require: true,
    },
    reference: {
      type: String,
      require: true,
    },
    expanseAmount: {
      type: Number,
      require: true,
    },
    expanseDate: {
      type: Date,
      require: true,
    },
    expanseNote: {
      type: String,
      require: true,
    },
    status: {
      type: Number,
      require: true,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    updated_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    branchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
    },
    expenseTypeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ExpenseType",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Expense", expenseSchema);
