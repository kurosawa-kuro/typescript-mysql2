require('dotenv').config();

import { Pool } from 'mysql2/promise'
import { infomation } from '../types/information';

export async function seedInfomations(conn: Pool): Promise<{ data: string | null, error: any }> {
    try {

        const inputData: infomation[] = [
            {
                content: "content 712"
            }, {
                content: "content 81"
            }
        ]

        await Promise.all(inputData.map(async (infomation: infomation) => {
            await conn.query('INSERT INTO infomation SET ?', [infomation]);
        }));

        return { data: "success seed infomations", error: null }
    } catch (error) {

        return { data: null, error }
    }
}
