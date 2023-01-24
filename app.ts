require('dotenv').config();

import { Pool } from 'mysql2/promise'
import { connect } from './utils/connection';
import { infomation } from './types/information';
import {
    createInfomation,
    readInfomations,
    readInfomation,
    updateInfomation,
    deleteInfomation
} from "./services/infomation_service";

let conn: Pool | null = null;

async function app() {
    console.log("start app")

    conn = await connect();

    // Create
    const input: infomation = { content: 'efg' }
    const { data: createInfomationData, error: createInfomationError } = await createInfomation(conn, input)

    // Read
    const { data: readInfomationsData, error: readInfomationsError } = await readInfomations(conn)

    // Read
    const id: number = 4
    const { data: readInfomationData, error: readInfomationError } = await readInfomation(conn, id)

    // Update
    const updateId: number = 5
    const updateInput: infomation = { content: 'efgg' }
    const { data: updateInfomationData, error: updateInfomationError } = await updateInfomation(conn, updateId, updateInput)

    // Delete
    const deleteId: number = 6
    const { data: deleteInfomationData, error: deleteInfomationError } = await deleteInfomation(conn, deleteId)

    if (createInfomationError) {
        throw new Error(createInfomationError);
    }

    if (readInfomationsError) {
        throw new Error(readInfomationsError);
    }

    console.log({ createInfomationData })
    console.log({ readInfomationsData })
    console.log({ readInfomationData })
    console.log({ updateInfomationData })
    console.log({ deleteInfomationData })

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