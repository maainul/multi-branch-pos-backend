export const listEmployeeCtrl = async (req, res) => {
  console.log("====>", req.query);
  return res.status(201).json({
    success: true,
    message: "Employee list retrieve successfully",
  });
};

export const createEmployeeCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.body,
    message: "Employee added successfully",
  });
};

export const showEmployeeCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Employee List successfully",
  });
};

export const updateEmployeeCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Employee update successfully",
  });
};

export const deleteEmployeeCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Employee delete successfully",
  });
};

export const updateEmployeeStatusCtrl = async (req, res) => {
  return res.status(201).json({
    success: true,
    data: req.params,
    message: "Employee update status successfully",
  });
};
