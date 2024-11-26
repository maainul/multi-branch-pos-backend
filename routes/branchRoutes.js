import express from "express";
import {
  listBranchCtrl,
  createBranchCtrl,
  showBranchCtrl,
  updateBranchCtrl,
  deleteBranchCtrl,
  updateBranchStatusCtrl,
} from "../controllers/branchCtrl.js";

const router = express.Router();

// GET || ALL Branch lists
router.get("/list", listBranchCtrl);

// CREATE || Single Branch
router.post("/create", createBranchCtrl);

// GET || Single Branch
router.get("/show/:id", showBranchCtrl);

// UPDATE || Update Branch Info
router.put("/update/:id", updateBranchCtrl);

// DELETE || Delete Branch
router.delete("/delete/:id", deleteBranchCtrl);

// UPDATE || Update Branch Status
router.put("/update/status/:id", updateBranchStatusCtrl);

export default router;
