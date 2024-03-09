import { router as productRoutes } from "./productRoutes.js";
import { router as cartRoutes } from "./userRoutes.js";

const initRoutes = (app) => {
  app.use("/products", productRoutes);
  app.use("/cart", cartRoutes);
};

export { initRoutes };