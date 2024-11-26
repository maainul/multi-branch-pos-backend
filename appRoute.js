import branchRoutes from "./routes/branchRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import bankAccountRoutes from "./routes/bankAccountRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import subCategoryRoutes from "./routes/subCategoryRoutes.js";
import supplierRoutes from "./routes/supplierRoutes.js";
import assetsRoutes from "./routes/assetsRoutes.js";

const setupRoutes = (app) => {
  app.use("/api/v1/branch", branchRoutes);
  app.use("/api/v1/employee", employeeRoutes);
  app.use("/api/v1/product", productRoutes);
  app.use("/api/v1/categroy", categoryRoutes);
  app.use("/api/v1/sub-categroy", subCategoryRoutes);
  app.use("/api/v1/bank-account", bankAccountRoutes);
  app.use("/api/v1/supplier", supplierRoutes);
  app.use("/api/v1/assets", assetsRoutes);
};

export default setupRoutes;
