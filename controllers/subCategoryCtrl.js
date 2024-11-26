export const listSubCategoryCtrl = async (req, res) => {
  console.log("====>", req.query);
  return res.status(201).json({
    success: true,
    message: "SubCategory list retrieve successfully",
  });
};

export const createSubCategoryCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.body,
    message: "SubCategory added successfully",
  });
};

export const showSubCategoryCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "SubCategory List successfully",
  });
};

export const updateSubCategoryCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "SubCategory update successfully",
  });
};

export const deleteSubCategoryCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "SubCategory delete successfully",
  });
};

export const updateSubCategoryStatusCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "SubCategory update status successfully",
  });
};
