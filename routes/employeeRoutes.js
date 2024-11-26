import express from "express";
import {
  listEmployeeCtrl,
  createEmployeeCtrl,
  showEmployeeCtrl,
  updateEmployeeCtrl,
  deleteEmployeeCtrl,
  updateEmployeeStatusCtrl,
} from "../controllers/employeeCtrl.js";

const router = express.Router();

// GET || ALL Employee lists + Branch wise Employee Filter
router.get("/list", listEmployeeCtrl);

// CREATE || Single Employee
router.post("/create", createEmployeeCtrl);

// GET || Single Employee
router.get("/show/:id", showEmployeeCtrl);

// UPDATE || Update Employee Info
router.put("/update/:id", updateEmployeeCtrl);

// DELETE || Delete Employee
router.delete("/delete/:id", deleteEmployeeCtrl);

// UPDATE || Update Employee Status
router.put("/update/status/:id", updateEmployeeStatusCtrl);

export default router;
