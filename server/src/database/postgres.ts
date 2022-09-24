const { Pool } = require('pg');

export const connection = new Pool({
    user: process.env.USER,
    database: "products",
    password: process.env.PASS,
    port: 5432,
    host: process.env.HOST,
});

export async function connectionDemo():Promise<void> {
    const query = "SELECT * FROM related LIMIT 2";
    const example = await connection.query(query);
    console.log(example);
};