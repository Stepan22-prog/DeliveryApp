import CartModel from "../models/cartModel.js";

class CartService {
    constructor(model) {
        this.cartModel = model;
    }

    async createOrder(orderData) {
        const {insertId} = await this.cartModel.createOrder({
          name: orderData.name, 
          email: orderData.email, 
          phone: orderData.phone, 
          address: orderData.address, 
          total_price: orderData.totalPrice
        });

        orderData.products.forEach(product => {
          this.cartModel.createOrderItem({
            product_id: product.productId,
            order_id: insertId,
            quantity: product.quantity,
            price: product.price,
          })
        });
    }
}

const cartService = new CartService(new CartModel());

export default cartService;