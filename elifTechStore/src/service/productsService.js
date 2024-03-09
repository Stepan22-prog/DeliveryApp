import API from "./api";

class ProductService extends API {
    async getProducts() {
        return this.makeQuery({
            url: '/products',
        })
    }
}

export default ProductService;