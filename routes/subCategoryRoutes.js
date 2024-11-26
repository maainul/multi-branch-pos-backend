import express from "express";
import {
  listSubCategoryCtrl,
  createSubCategoryCtrl,
  showSubCategoryCtrl,
  updateSubCategoryCtrl,
  deleteSubCategoryCtrl,
  updateSubCategoryStatusCtrl,
} from "../controllers/subCategoryCtrl.js";

const router = express.Router();

// GET || ALL SubCategory lists + Branch wise SubCategory Filter
router.get("/list", listSubCategoryCtrl);

// CREATE || Single SubCategory
router.post("/create", createSubCategoryCtrl);

// GET || Single SubCategory
router.get("/show/:id", showSubCategoryCtrl);

// UPDATE || Update SubCategory Info
router.put("/update/:id", updateSubCategoryCtrl);

// DELETE || Delete SubCategory
router.delete("/delete/:id", deleteSubCategoryCtrl);

// UPDATE || Update SubCategory Status
router.put("/update/status/:id", updateSubCategoryStatusCtrl);

export default router;
