import Model from "./model.js";

class ProductModel extends Model {
	async getAllProducts() {
		try {
			const [results] = await this.connection.query('SELECT * FROM products');
			return results;
		} catch (error) {
			throw error;
		}
	}

	async getProductsFromShop(id) {
		try {
			const [results] = await this.connection.execute('SELECT * FROM `products` WHERE `shop_id` = ?', [id]);
			return results;
		} catch (error) {
			throw error;
		}
	}
}

export default ProductModel;
