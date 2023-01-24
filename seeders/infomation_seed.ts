require('dotenv').config();

import { Pool } from 'mysql2/promise'
import { infomationData } from '../seeders/data/infomation_data';
import { infomation } from '../types/information';

export async function seedInfomations(conn: Pool): Promise<{ data: string | null, error: any }> {
    try {
        const inputData: infomation[] = infomationData

        let data: string | null = null;

        await Promise.all(inputData.map(async (infomation: infomation) => {
            await conn.query('INSERT INTO infomation SET ?', [infomation]);
        })).then(() => {
            data = "success seed infomations"

            return { data, error: null }
        });

        return { data, error: null }

    } catch (error) {

        return { data: null, error }
    }
}
