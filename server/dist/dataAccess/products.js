"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductRelated = exports.getProductStyles = exports.getProductInfo = exports.getProducts = void 0;
const postgres_1 = require("./../database/postgres");
const format = __importStar(require("../Utilities/formatData"));
const postgres = __importStar(require("../Utilities/queryStrings"));
// Modify Products to return page and count
async function getProducts(page = '1', count = '5') {
    const { rows } = await postgres_1.connection.query(postgres.getProducts(page, count));
    return rows;
}
exports.getProducts = getProducts;
async function getProductInfo(id = '1') {
    const [resultInfo, resultFeatures] = await Promise.all([
        postgres_1.connection.query(postgres.getProductInfo(id)),
        postgres_1.connection.query(postgres.getProductFeatures(id))
    ]);
    const [info] = resultInfo.rows;
    const features = resultFeatures.rows;
    return { ...info, features };
}
exports.getProductInfo = getProductInfo;
async function getProductStyles(id = '1') {
    const [resultSKUs, resultPhotos] = await Promise.all([
        postgres_1.connection.query(postgres.getStyleSKUs(id)),
        postgres_1.connection.query(postgres.getStylePhotos(id))
    ]);
    const result = format.Styles(resultSKUs.rows, resultPhotos.rows);
    return { "product_id": id, results: result };
}
exports.getProductStyles = getProductStyles;
async function getProductRelated(id = '1') {
    const { rows: result } = await postgres_1.connection.query(postgres.getProductRelated(id));
    const related = result.map((id) => id.related_product_id);
    return related;
}
exports.getProductRelated = getProductRelated;
