require('dotenv').config();

import { data_error_promise } from "./modules/data_error_promise";

async function app() {
    console.log("start app")

    const { data, error } = await data_error_promise()

    if (error) {
        throw new Error(error);
    }

    console.log({ data })

    console.log("end app")
}

app()
    .catch((e) => {
        console.error(`There was an error while seeding: ${e}`);
        // process.exit(1);
    })
    .finally(async () => {
        console.log('finally end app.');
        // await prisma.$disconnect();
    });