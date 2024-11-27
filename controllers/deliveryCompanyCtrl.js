export const listDeliveryCompanyCtrl = async (req, res) => {
  console.log("====>", req.query);
  return res.status(201).json({
    success: true,
    message: "DeliveryCompany list retrieve successfully",
  });
};

export const createDeliveryCompanyCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.body,
    message: "DeliveryCompany added successfully",
  });
};

export const showDeliveryCompanyCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "DeliveryCompany List successfully",
  });
};

export const updateDeliveryCompanyCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "DeliveryCompany update successfully",
  });
};

export const deleteDeliveryCompanyCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "DeliveryCompany delete successfully",
  });
};

export const updateDeliveryCompanyStatusCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "DeliveryCompany update status successfully",
  });
};
