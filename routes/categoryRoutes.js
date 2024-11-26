import express from "express";
import {
  listCategoryCtrl,
  createCategoryCtrl,
  showCategoryCtrl,
  updateCategoryCtrl,
  deleteCategoryCtrl,
  updateCategoryStatusCtrl,
} from "../controllers/categoryCtrl.js";

const router = express.Router();

// GET || ALL Category lists + Branch wise Category Filter
router.get("/list", listCategoryCtrl);

// CREATE || Single Category
router.post("/create", createCategoryCtrl);

// GET || Single Category
router.get("/show/:id", showCategoryCtrl);

// UPDATE || Update Category Info
router.put("/update/:id", updateCategoryCtrl);

// DELETE || Delete Category
router.delete("/delete/:id", deleteCategoryCtrl);

// UPDATE || Update Category Status
router.put("/update/status/:id", updateCategoryStatusCtrl);

export default router;
