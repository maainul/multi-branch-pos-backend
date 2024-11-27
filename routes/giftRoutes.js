import express from "express";
import {
  listGiftCtrl,
  createGiftCtrl,
  showGiftCtrl,
  updateGiftCtrl,
  deleteGiftCtrl,
  updateGiftStatusCtrl,
} from "../controllers/giftCtrl.js";

const router = express.Router();

// GET || ALL Gift lists + Branch wise Gift Filter
router.get("/list", listGiftCtrl);

// CREATE || Single Gift
router.post("/create", createGiftCtrl);

// GET || Single Gift
router.get("/show/:id", showGiftCtrl);

// UPDATE || Update Gift Info
router.put("/update/:id", updateGiftCtrl);

// DELETE || Delete Gift
router.delete("/delete/:id", deleteGiftCtrl);

// UPDATE || Update Gift Status
router.put("/update/status/:id", updateGiftStatusCtrl);

export default router;
