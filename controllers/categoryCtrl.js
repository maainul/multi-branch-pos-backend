export const listCategoryCtrl = async (req, res) => {
  console.log("====>", req.query);
  return res.status(201).json({
    success: true,
    message: "Category list retrieve successfully",
  });
};

export const createCategoryCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.body,
    message: "Category added successfully",
  });
};

export const showCategoryCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Category List successfully",
  });
};

export const updateCategoryCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Category update successfully",
  });
};

export const deleteCategoryCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Category delete successfully",
  });
};

export const updateCategoryStatusCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Category update status successfully",
  });
};
