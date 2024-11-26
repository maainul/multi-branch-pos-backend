export const listAssetsCtrl = async (req, res) => {
  console.log("====>", req.query);
  return res.status(201).json({
    success: true,
    message: "Assets list retrieve successfully",
  });
};

export const createAssetsCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.body,
    message: "Assets added successfully",
  });
};

export const showAssetsCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Assets List successfully",
  });
};

export const updateAssetsCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Assets update successfully",
  });
};

export const deleteAssetsCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Assets delete successfully",
  });
};

export const updateAssetsStatusCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Assets update status successfully",
  });
};
