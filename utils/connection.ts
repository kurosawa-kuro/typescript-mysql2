require('dotenv').config();
const mysql = require('mysql');

export const createConnection = () => {
    return mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
    });
}