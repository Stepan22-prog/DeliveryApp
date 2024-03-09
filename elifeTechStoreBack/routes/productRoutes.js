import { Router } from "express";
import { productService } from "../services/productService.js";
import { responseMiddleware } from "../middlewares/response.js";

const router = Router();

router.get('/', (req, res, next) => {
  try {
    res.data = productService.getAll();
  } catch (err) {
    res.err = err.message;
  } finally {
    next();
  }
}, responseMiddleware);

export { router };
