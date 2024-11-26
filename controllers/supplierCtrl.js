export const listSupplierCtrl = async (req, res) => {
  console.log("====>", req.query);
  return res.status(201).json({
    success: true,
    message: "Supplier list retrieve successfully",
  });
};

export const createSupplierCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.body,
    message: "Supplier added successfully",
  });
};

export const showSupplierCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Supplier List successfully",
  });
};

export const updateSupplierCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Supplier update successfully",
  });
};

export const deleteSupplierCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Supplier delete successfully",
  });
};

export const updateSupplierStatusCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Supplier update status successfully",
  });
};
