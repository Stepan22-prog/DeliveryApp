import API from "./api";

class ProductService extends API {
    async getProducts() {
        return await this.makeQuery({
            url: '/products',
        })
    }
}

export default ProductService;