import Model from "./model.js";

class ProductModel extends Model {
    async getAllProducts() {
        if (!this.connection) {
            throw new Error('Connection not initialized.');
        }

        const [results] = await this.connection.query('SELECT * FROM products');
        return results;
    }
}

export default ProductModel;