import ProductModel from "../models/productModel.js";

class ProductService {
    constructor(model) {
        this.productModel =model;
    }

    getAllProducts() {
        return this.productModel.getAllProducts();
    }

    getProductsFromShop(id) {
        return this.productModel.getProductsFromShop(id);
    }
}

const productService = new ProductService(new ProductModel());

export default productService;