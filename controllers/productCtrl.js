export const listProductCtrl = async (req, res) => {
  console.log("====>", req.query);
  return res.status(201).json({
    success: true,
    message: "Product list retrieve successfully",
  });
};

export const createProductCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.body,
    message: "Product added successfully",
  });
};

export const showProductCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Product List successfully",
  });
};

export const updateProductCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Product update successfully",
  });
};

export const deleteProductCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Product delete successfully",
  });
};

export const updateProductStatusCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Product update status successfully",
  });
};
