import { Router } from "express";
import { responseMiddleware } from "../middlewares/response.js";
import cartService from "../services/cartService.js";


const router = Router();

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    await cartService.createOrder(body);
  } catch (err) {
    res.err = err.message;
  } finally {
    next();
  }
}, responseMiddleware);

export { router };