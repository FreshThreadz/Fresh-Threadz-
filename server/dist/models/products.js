"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const postgres_1 = require("./../database/postgres");
function getProducts(page = '1', count = '5') {
    const pageNum = Number(page);
    const countNum = Number(count);
    const query = `SELECT * FROM related LIMIT ${pageNum * countNum}`;
    return postgres_1.connection.query(query);
}
exports.getProducts = getProducts;
