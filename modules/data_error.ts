require('dotenv').config();

type infomation = {
    content: string;
}

export async function data_error(): Promise<{ data: infomation[], error: any }> {
    console.log("data_error invoked")
    try {
        // throw new Error("Error module1");
        const data = [{ "content": "content 1" }, { "content": "content 2" }]

        return { data, error: null }
    } catch (error) {
        return { data: [], error }
    }
}