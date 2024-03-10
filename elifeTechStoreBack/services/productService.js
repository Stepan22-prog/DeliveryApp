import ProductModel from "../models/productModel.js";

class ProductService {
    constructor(model) {
        this.productModel =model;
    }

    getProducts(id) {
        if (id === '0') {
            return this.productModel.getAllProducts();
        }
        return this.productModel.getProductsFromShop(id);
    }
}

const productService = new ProductService(new ProductModel());

export default productService;