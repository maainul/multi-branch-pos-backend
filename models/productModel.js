import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    genericName: {
      type: String,
      require: true,
    },
    reminderQuantity: {
      type: Number,
      require: true,
    },
    saleQuantity: {
      type: Number,
      require: true,
    },
    figure: {
      type: String,
    },
    strength: {
      type: String,
    },
    dosage: {
      type: String,
    },
    size: {
      type: String,
    },
    color: {
      type: String,
    },
    weight: {
      type: String,
    },
    length: {
      type: String,
    },
    logDescription: {
      type: String,
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
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    subCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
    },
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
