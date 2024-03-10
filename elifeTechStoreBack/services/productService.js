import ProductModel from "../models/productModel.js";

class ProductService {
    constructor(model) {
        this.productModel =model;
    }

    getAllProducts() {
        return this.productModel.getAllProducts();
    }
}

const productService = new ProductService(new ProductModel());

export default productService;