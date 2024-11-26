export const listBranchCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    message: "branch list retrieve successfully",
  });
};

export const createBranchCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.body,
    message: "branch added successfully",
  });
};

export const showBranchCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "branch List successfully",
  });
};

export const updateBranchCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "branch update successfully",
  });
};

export const deleteBranchCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "branch delete successfully",
  });
};

export const updateBranchStatusCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "branch update status successfully",
  });
};
