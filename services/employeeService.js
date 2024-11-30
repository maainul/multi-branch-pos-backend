import { validateEmployee } from "../validation/validateEmployee.js";
import employeeModel from "../models/employeeModel.js";
import { validateObjectId } from "../utils/validateObjectId.js";

export const createEmployeeService = async (employeeData) => {
  const { error, value } = await validateEmployee(employeeData);
  if (error) {
    throw {
      status: 400,
      details: error.details.map((detail) => ({
        label: detail.context.label,
        message: detail.message.replace(/"/g, ""),
      })),
    };
  }
  const accountNumberExists = await employeeModel.findOne({
    accountNumber: employeeData.accountNumber,
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
  const newEmployee = await employeeModel.create(value);
  return newEmployee;
};

export const listEmployeeService = async () => {
  try {
    const employeees = await employeeModel.find();
    return employeees;
  } catch (error) {
    throw new Error("Error retrieving bank Account from the database");
  }
};

export const showEmployeeService = async (employeeId) => {
  try {
    validateObjectId(employeeId);
    const employee = await employeeModel.findById(employeeId);
    if (!employee) {
      throw { status: 404, message: "Bank Account not found" };
    }
    return employee;
  } catch (error) {
    throw error;
  }
};

export const updateEmployeeService = async (
  employeeId,
  employeeData
) => {
  validateObjectId(employeeId);

  // Find and update the employee
  const updatedEmployee = await employeeModel.findByIdAndUpdate(
    employeeId,
    employeeData,
    {
      new: true, // Return the updated document
      runValidators: true, // Ensure Mongoose validators run
    }
  );
  if (!updatedEmployee) {
    throw { status: 404, message: "Bank Account not found" };
  }
  return updatedEmployee;
};

export const updateEmployeeStatusService = async (employeeId, status) => {
  validateObjectId(employeeId);

  // Validate the 'status' input
  if (typeof status !== "number" || isNaN(status)) {
    throw {
      status: 400,
      message: "Invalid status value. Status must be a valid number.",
    };
  }

  // Update the employee status
  const updatedEmployee = await employeeModel.findByIdAndUpdate(
    employeeId,
    { status }, // Use the status directly as it's validated
    { new: true, runValidators: true }
  );

  // Handle employee not found
  if (!updatedEmployee) {
    throw { status: 404, message: "Bank Account not found" };
  }

  // Return the updated employee
  return updatedEmployee;
};

export const deleteEmployeeService = async (employeeId) => {
  validateObjectId(employeeId);

  // Attempt to delete the employee
  const deletedEmployee = await employeeModel.findByIdAndDelete(
    employeeId
  );

  // If employee not found, throw a 404 error
  if (!deletedEmployee) {
    throw { status: 404, message: "Employee not found" };
  }

  // Return the deleted employee
  return deletedEmployee;
};
