import mysql from 'mysql2/promise';

class Model {
	constructor() {
		this.connection = null;
		this.init();
	}

	async init() {
		try {
			this.connection = mysql.createPool({
				host: process.env.DB_HOST,
				user: process.env.DB_USER,
				password: process.env.DB_PASSWORD,
				database: process.env.DB_DATABASE,
				maxIdle: 0,
				idleTimeout: 60000,
				enableKeepAlive: true,
			});
		} catch (error) {
			throw error;
		}
	}
}

export default Model;
