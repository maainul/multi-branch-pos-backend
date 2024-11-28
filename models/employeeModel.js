import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
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
    branch_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
    }
  },
  { timestamps: true }
);

export default mongoose.model("Employee", employeeSchema);
