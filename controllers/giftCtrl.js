export const listGiftCtrl = async (req, res) => {
  console.log("====>", req.query);
  return res.status(201).json({
    success: true,
    message: "Gift list retrieve successfully",
  });
};

export const createGiftCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.body,
    message: "Gift added successfully",
  });
};

export const showGiftCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Gift List successfully",
  });
};

export const updateGiftCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Gift update successfully",
  });
};

export const deleteGiftCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Gift delete successfully",
  });
};

export const updateGiftStatusCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Gift update status successfully",
  });
};
