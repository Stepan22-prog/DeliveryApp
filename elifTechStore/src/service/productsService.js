import API from "./api";

class ProductService extends API {
    async getProducts(shopId) {
        return await this.makeQuery({
            url: `/products/${shopId}`,
        })
    }
}

export default ProductService;