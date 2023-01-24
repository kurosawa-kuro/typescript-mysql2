require('dotenv').config();
const mysql = require('mysql');
import { beginTransaction, query, commit, end } from '../utils/mysqlPromise';
import { createConnection } from '../utils/connection';
import { infomation } from '../types/information';

const connection = createConnection();

export async function data_error_promise(): Promise<{ data: infomation[], error: any }> {
    console.log("data_error_promise invoked")
    try {
        await beginTransaction(connection);
        await query(connection, 'INSERT INTO infomation (content) VALUES (?)', ['Hello!']);
        const data = await query(connection, 'SELECT * FROM infomation', []) as infomation[];

        await commit(connection);
        await end(connection);

        return { data, error: null }
    } catch (error) {
        return { data: [], error }
    }
}