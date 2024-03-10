import { router as productRoutes } from "./productRoutes.js";

const initRoutes = (app) => {
  app.use("/products", productRoutes);
};

export { initRoutes };