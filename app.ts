require('dotenv').config();

import { connect } from './utils/connection';
import { data_error_async } from "./modules/data_error_async";
import { Pool } from 'mysql2/promise'

let conn: Pool | null = null;

async function app() {
    console.log("start app")

    conn = await connect();
    const { data, error } = await data_error_async(conn)

    if (error) {
        throw new Error(error);
    }

    console.log({ data })

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