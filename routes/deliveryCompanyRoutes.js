import express from "express";
import {
  listDeliveryCompanyCtrl,
  createDeliveryCompanyCtrl,
  showDeliveryCompanyCtrl,
  updateDeliveryCompanyCtrl,
  deleteDeliveryCompanyCtrl,
  updateDeliveryCompanyStatusCtrl,
} from "../controllers/deliveryCompanyCtrl.js";

const router = express.Router();

// GET || ALL DeliveryCompany lists + Branch wise DeliveryCompany Filter
router.get("/list", listDeliveryCompanyCtrl);

// CREATE || Single DeliveryCompany
router.post("/create", createDeliveryCompanyCtrl);

// GET || Single DeliveryCompany
router.get("/show/:id", showDeliveryCompanyCtrl);

// UPDATE || Update DeliveryCompany Info
router.put("/update/:id", updateDeliveryCompanyCtrl);

// DELETE || Delete DeliveryCompany
router.delete("/delete/:id", deleteDeliveryCompanyCtrl);

// UPDATE || Update DeliveryCompany Status
router.put("/update/status/:id", updateDeliveryCompanyStatusCtrl);

export default router;
