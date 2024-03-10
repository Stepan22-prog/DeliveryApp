import { Router } from "express";
import { responseMiddleware } from "../middlewares/response.js";
import productService from "../services/productService.js";


const router = Router();

router.get('/', async (req, res, next) => {
  try {
    res.data = await productService.getAllProducts();
  } catch (err) {
    res.err = err.message;
  } finally {
    next();
  }
}, responseMiddleware);

router.get('/:id', async (req, res, next) => {
  try {
    res.data = await productService.getProductsFromShop(req.params.id);
  } catch (err) {
    res.err = err.message;
  } finally {
    next();
  }
}, responseMiddleware);

export { router };
