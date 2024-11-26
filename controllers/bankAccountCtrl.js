export const listBankAccountCtrl = async (req, res) => {
  console.log("====>", req.query);
  return res.status(201).json({
    success: true,
    message: "BankAccount list retrieve successfully",
  });
};

export const createBankAccountCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.body,
    message: "BankAccount added successfully",
  });
};

export const showBankAccountCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "BankAccount List successfully",
  });
};

export const updateBankAccountCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "BankAccount update successfully",
  });
};

export const deleteBankAccountCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "BankAccount delete successfully",
  });
};

export const updateBankAccountStatusCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "BankAccount update status successfully",
  });
};
