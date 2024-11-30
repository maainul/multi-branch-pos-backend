import { validateProduct } from "../validation/validateProduct.js";
import productModel from "../models/productModel.js";
import { validateObjectId } from "../utils/validateObjectId.js";

export const createProductService = async (productData) => {
  const { error, value } = await validateProduct(productData);
  if (error) {
    throw {
      status: 400,
      details: error.details.map((detail) => ({
        label: detail.context.label,
        message: detail.message.replace(/"/g, ""),
      })),
    };
  }
  const accountNumberExists = await productModel.findOne({
    accountNumber: productData.accountNumber,
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
  const newProduct = await productModel.create(value);
  return newProduct;
};

export const listProductService = async () => {
  try {
    const productes = await productModel.find();
    return productes;
  } catch (error) {
    throw new Error("Error retrieving bank Account from the database");
  }
};

export const showProductService = async (productId) => {
  try {
    validateObjectId(productId);
    const product = await productModel.findById(productId);
    if (!product) {
      throw { status: 404, message: "Bank Account not found" };
    }
    return product;
  } catch (error) {
    throw error;
  }
};

export const updateProductService = async (
  productId,
  productData
) => {
  validateObjectId(productId);

  // Find and update the product
  const updatedProduct = await productModel.findByIdAndUpdate(
    productId,
    productData,
    {
      new: true, // Return the updated document
      runValidators: true, // Ensure Mongoose validators run
    }
  );
  if (!updatedProduct) {
    throw { status: 404, message: "Bank Account not found" };
  }
  return updatedProduct;
};

export const updateProductStatusService = async (productId, status) => {
  validateObjectId(productId);

  // Validate the 'status' input
  if (typeof status !== "number" || isNaN(status)) {
    throw {
      status: 400,
      message: "Invalid status value. Status must be a valid number.",
    };
  }

  // Update the product status
  const updatedProduct = await productModel.findByIdAndUpdate(
    productId,
    { status }, // Use the status directly as it's validated
    { new: true, runValidators: true }
  );

  // Handle product not found
  if (!updatedProduct) {
    throw { status: 404, message: "Bank Account not found" };
  }

  // Return the updated product
  return updatedProduct;
};

export const deleteProductService = async (productId) => {
  validateObjectId(productId);

  // Attempt to delete the product
  const deletedProduct = await productModel.findByIdAndDelete(
    productId
  );

  // If product not found, throw a 404 error
  if (!deletedProduct) {
    throw { status: 404, message: "Product not found" };
  }

  // Return the deleted product
  return deletedProduct;
};
