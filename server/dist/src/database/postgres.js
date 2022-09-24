"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionDemo = exports.connection = void 0;
const { Pool } = require('pg');
exports.connection = new Pool({
    user: process.env.USER,
    database: "products",
    password: process.env.PASS,
    port: 5432,
    host: process.env.HOST,
});
async function connectionDemo() {
    const query = "SELECT * FROM related LIMIT 2";
    const example = await exports.connection.query(query);
    console.log(example);
}
exports.connectionDemo = connectionDemo;
;
