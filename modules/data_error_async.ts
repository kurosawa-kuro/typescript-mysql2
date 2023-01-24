require('dotenv').config();

import { infomation } from '../types/information';
import { createPool, Pool } from 'mysql2/promise'

export async function data_error_async(conn: Pool): Promise<{ data: infomation[], error: any }> {
    console.log("data_error_async invoked")
    try {
        const newPost: infomation = { content: "abx" }

        await conn.query('INSERT INTO infomation SET ?', [newPost]);

        const res = await conn.query('SELECT * FROM infomation');
        const data = res[0] as infomation[];

        return { data, error: null }
    } catch (error) {

        return { data: [], error }
    }
}