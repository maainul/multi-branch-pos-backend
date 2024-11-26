import express from "express";
import {
  listBankAccountCtrl,
  createBankAccountCtrl,
  showBankAccountCtrl,
  updateBankAccountCtrl,
  deleteBankAccountCtrl,
  updateBankAccountStatusCtrl,
} from "../controllers/bankAccountCtrl.js";

const router = express.Router();

// GET || ALL BankAccount lists + Branch wise BankAccount Filter
router.get("/list", listBankAccountCtrl);

// CREATE || Single BankAccount
router.post("/create", createBankAccountCtrl);

// GET || Single BankAccount
router.get("/show/:id", showBankAccountCtrl);

// UPDATE || Update BankAccount Info
router.put("/update/:id", updateBankAccountCtrl);

// DELETE || Delete BankAccount
router.delete("/delete/:id", deleteBankAccountCtrl);

// UPDATE || Update BankAccount Status
router.put("/update/status/:id", updateBankAccountStatusCtrl);

export default router;
