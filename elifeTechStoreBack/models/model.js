import mysql from 'mysql2/promise';

class Model {
    constructor() {
        this.connection = null;
        this.init();
    }

    async init() {
        this.connection = await mysql.createConnection({
            host: 'localhost',
            user: 'Stepan',
            password: 'root',
            database: 'elifTechStore',
        });
    }
}

export default Model;
