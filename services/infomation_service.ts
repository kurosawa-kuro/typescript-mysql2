require('dotenv').config();

import { Pool } from 'mysql2/promise'
import { infomation } from '../types/information';

export async function create_infomation_async(conn: Pool, input: infomation): Promise<{ data: number | null, error: any }> {
    try {
        const [res]: any = await conn.query('INSERT INTO infomation SET ?', [input]);
        const data: number = res.insertId

        return { data, error: null }
    } catch (error) {

        return { data: null, error }
    }
}

export async function read_infomations_async(conn: Pool): Promise<{ data: infomation[] | null, error: any }> {
    try {
        const [res] = await conn.query('SELECT * FROM infomation');
        const data = res as infomation[];

        return { data, error: null }
    } catch (error) {

        return { data: null, error }
    }
}

export async function read_infomation_async(conn: Pool, id: number): Promise<{ data: infomation | null, error: any }> {
    try {
        const [res]: any = await conn.query('SELECT * FROM infomation WHERE id = ?', [id]);
        const data: infomation = res[0];

        return { data, error: null }
    } catch (error) {

        return { data: null, error }
    }
}

export async function update_infomation_async(conn: Pool, id: number, input: infomation): Promise<{ data: { changedRows: boolean } | null, error: any }> {
    try {
        const [res]: any = await conn.query('UPDATE infomation set ? WHERE id = ?', [input, id]);
        const data: { changedRows: boolean } = { changedRows: res.changedRows }

        return { data, error: null }
    } catch (error) {

        return { data: null, error }
    }
}

export async function delete_infomation_async(conn: Pool, id: number): Promise<{ data: { affectedRows: boolean } | null, error: any }> {
    try {
        const [res]: any = await conn.query('DELETE FROM infomation WHERE id = ?', [id]);
        const data: { affectedRows: boolean } = { affectedRows: res.affectedRows }

        return { data, error: null }
    } catch (error) {

        return { data: null, error }
    }
}