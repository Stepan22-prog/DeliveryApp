import ProductModel from "../models/productModel.js";

class ProductService {
  constructor(model) {
    this.productModel = model;
  }

  getProducts(id) {
    try {
      if (id === '0') {
        return this.productModel.getAllProducts();
      }
      const response = this.productModel.getProductsFromShop(id);
      if (response.length === 0) {
        throw new Error("Shop with such id not found")
      }
      return response;
    } catch (error) {
      throw error;
    }
  }
}

const productService = new ProductService(new ProductModel());

export default productService;
