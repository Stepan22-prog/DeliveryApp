import ProductModel from "../models/productModel.js";

class ProductService {
    constructor(model) {
        this.productModel =model;
    }

    async getAllProducts() {
        return this.productModel.getAllProducts();
    }
}

const productService = new ProductService(new ProductModel());

export default productService;