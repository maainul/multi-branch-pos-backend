import express from "express";
import {
  listProductCtrl,
  createProductCtrl,
  showProductCtrl,
  updateProductCtrl,
  deleteProductCtrl,
  updateProductStatusCtrl,
} from "../controllers/productCtrl.js";

const router = express.Router();

// GET || ALL Product lists + Branch wise Product Filter
router.get("/list", listProductCtrl);

// CREATE || Single Product
router.post("/create", createProductCtrl);

// GET || Single Product
router.get("/show/:id", showProductCtrl);

// UPDATE || Update Product Info
router.put("/update/:id", updateProductCtrl);

// DELETE || Delete Product
router.delete("/delete/:id", deleteProductCtrl);

// UPDATE || Update Product Status
router.put("/update/status/:id", updateProductStatusCtrl);

export default router;
