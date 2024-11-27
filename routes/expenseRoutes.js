import express from "express";
import {
  listExpenseCtrl,
  createExpenseCtrl,
  showExpenseCtrl,
  updateExpenseCtrl
} from "../controllers/expenseCtrl.js";

const router = express.Router();

// GET || ALL Expense lists + Branch wise Expense Filter
router.get("/list", listExpenseCtrl);

// CREATE || Single Expense
router.post("/create", createExpenseCtrl);

// GET || Single Expense
router.get("/show/:id", showExpenseCtrl);

// UPDATE || Update Expense Info
router.put("/update/:id", updateExpenseCtrl);

export default router;
