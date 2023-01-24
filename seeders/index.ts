require('dotenv').config();

import { Pool } from 'mysql2/promise'
import { connect } from '../utils/connection';
// import { infomation } from './types/information';
import {
    seedInfomations
} from "./infomation_seed";

let conn: Pool | null = null;

async function app() {
    console.log("start app")

    conn = await connect();

    // Create
    // const input: infomation = { content: 'efg' }
    const { data: seedInfomationsData, error: createInfomationError } = await seedInfomations(conn)
    console.log({ seedInfomationsData })

    console.log("end app")
}

app()
    .catch((e) => {
        console.error(`There was an error while seeding: ${e}`);
    })
    .finally(async () => {
        console.log('finally end app.');
        await conn!.end()
    });