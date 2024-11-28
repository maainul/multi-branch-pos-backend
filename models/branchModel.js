import mongoose from "mongoose";

const branchSchema = new mongoose.Schema(
  {
    branch_name: {
      type: String,
      require: true,
    },
    branch_phone: {
      type: String,
      require: true,
    },
    branch_email: {
      type: String,
      require: true,
    },
    branch_address: {
      type: String,
      require: true,
    },
    branch_location: {
      type: String,
      require: true,
    },
    open_date: {
      type: Date,
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
  },
  { timestamps: true }
);

export default mongoose.model("Branch", branchSchema);
