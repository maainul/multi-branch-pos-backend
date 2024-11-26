import express from "express";
import {
  listAssetsCtrl,
  createAssetsCtrl,
  showAssetsCtrl,
  updateAssetsCtrl,
  deleteAssetsCtrl,
  updateAssetsStatusCtrl,
} from "../controllers/assetsCtrl.js";

const router = express.Router();

// GET || ALL Assets lists + Branch wise Assets Filter
router.get("/list", listAssetsCtrl);

// CREATE || Single Assets
router.post("/create", createAssetsCtrl);

// GET || Single Assets
router.get("/show/:id", showAssetsCtrl);

// UPDATE || Update Assets Info
router.put("/update/:id", updateAssetsCtrl);

// DELETE || Delete Assets
router.delete("/delete/:id", deleteAssetsCtrl);

// UPDATE || Update Assets Status
router.put("/update/status/:id", updateAssetsStatusCtrl);

export default router;
