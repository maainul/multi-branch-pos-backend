import express from "express";
import {
  listExpenseTypeCtrl,
  createExpenseTypeCtrl,
  showExpenseTypeCtrl,
  updateExpenseTypeCtrl,
  deleteExpenseTypeCtrl,
  updateExpenseTypeStatusCtrl,
} from "../controllers/expenseTypeCtrl.js";

const router = express.Router();

// GET || ALL ExpenseType lists + Branch wise ExpenseType Filter
router.get("/list", listExpenseTypeCtrl);

// CREATE || Single ExpenseType
router.post("/create", createExpenseTypeCtrl);

// GET || Single ExpenseType
router.get("/show/:id", showExpenseTypeCtrl);

// UPDATE || Update ExpenseType Info
router.put("/update/:id", updateExpenseTypeCtrl);

// DELETE || Delete ExpenseType
router.delete("/delete/:id", deleteExpenseTypeCtrl);

// UPDATE || Update ExpenseType Status
router.put("/update/status/:id", updateExpenseTypeStatusCtrl);

export default router;
