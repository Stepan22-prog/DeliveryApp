import mysql from 'mysql2/promise';

class Model {
	constructor() {
		this.connection = null;
		this.init();
	}

	async init() {
		try {
			this.connection = await mysql.createConnection({
				host: process.env.DB_HOST,
				user: process.env.DB_USER,
				password: process.env.DB_PASSWORD,
				database: process.env.DB_DATABASE,
			});
		} catch (error) {
			throw error;
		}
	}
}

export default Model;
