import { Router } from "express";
import { responseMiddleware } from "../middlewares/response.js";
import cartService from "../services/cartService.js";


const router = Router();

router.post('/', async (req, res, next) => {
  try {
    res.data = await cartService.createOrder(req.body);
  } catch (err) {
    console.error(err);
    res.err = err.message;
  } finally {
    next();
  }
}, responseMiddleware);

export { router };