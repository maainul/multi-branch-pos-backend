export const listExpenseTypeCtrl = async (req, res) => {
  console.log("====>", req.query);
  return res.status(201).json({
    success: true,
    message: "ExpenseType list retrieve successfully",
  });
};

export const createExpenseTypeCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.body,
    message: "ExpenseType added successfully",
  });
};

export const showExpenseTypeCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "ExpenseType List successfully",
  });
};

export const updateExpenseTypeCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "ExpenseType update successfully",
  });
};

export const deleteExpenseTypeCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "ExpenseType delete successfully",
  });
};

export const updateExpenseTypeStatusCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "ExpenseType update status successfully",
  });
};
