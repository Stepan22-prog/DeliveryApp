import API from "./api";

class CartService extends API {
    async createOrder(body) {
        return await this.makeQuery({
            url: '/cart',
            body: JSON.stringify(body),
            method: 'POST',
        })
    }
}

export default CartService;