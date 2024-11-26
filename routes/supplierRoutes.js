import express from "express";
import {
  listSupplierCtrl,
  createSupplierCtrl,
  showSupplierCtrl,
  updateSupplierCtrl,
  deleteSupplierCtrl,
  updateSupplierStatusCtrl,
} from "../controllers/supplierCtrl.js";

const router = express.Router();

// GET || ALL Supplier lists + Branch wise Supplier Filter
router.get("/list", listSupplierCtrl);

// CREATE || Single Supplier
router.post("/create", createSupplierCtrl);

// GET || Single Supplier
router.get("/show/:id", showSupplierCtrl);

// UPDATE || Update Supplier Info
router.put("/update/:id", updateSupplierCtrl);

// DELETE || Delete Supplier
router.delete("/delete/:id", deleteSupplierCtrl);

// UPDATE || Update Supplier Status
router.put("/update/status/:id", updateSupplierStatusCtrl);

export default router;
