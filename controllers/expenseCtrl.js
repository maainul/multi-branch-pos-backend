export const listExpenseCtrl = async (req, res) => {
  console.log("====>", req.query);
  return res.status(201).json({
    success: true,
    message: "Expense list retrieve successfully",
  });
};

export const createExpenseCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.body,
    message: "Expense added successfully",
  });
};

export const showExpenseCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Expense List successfully",
  });
};

export const updateExpenseCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Expense update successfully",
  });
};
