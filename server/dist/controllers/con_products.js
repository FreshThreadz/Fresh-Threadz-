"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductRelated = exports.getProductStyles = exports.getProductInfo = exports.getProducts = void 0;
const dataAccess_1 = __importDefault(require("../dataAccess"));
const getProducts = (req, res) => {
    const page = req.query.page;
    const count = req.query.count;
    dataAccess_1.default.getProducts(page, count)
        .then((result) => res.status(200).json(result))
        .catch((err) => console.log(err));
};
exports.getProducts = getProducts;
const getProductInfo = (req, res) => {
    const id = req.params.id;
    dataAccess_1.default.getProductInfo(id)
        .then((result) => res.status(200).json(result))
        .catch((err) => (res.sendStatus(500),
        console.log(err)));
};
exports.getProductInfo = getProductInfo;
const getProductStyles = (req, res) => {
    const id = req.params.id;
    dataAccess_1.default.getProductStyles(id)
        .then((result) => res.status(200).json(result))
        .catch((err) => (res.sendStatus(400),
        console.log(err)));
};
exports.getProductStyles = getProductStyles;
const getProductRelated = (req, res) => {
    const id = req.params.id;
    dataAccess_1.default.getProductRelated(id)
        .then((result) => res.status(200).json(result))
        .catch((err) => (res.sendStatus(400),
        console.log(err)));
};
exports.getProductRelated = getProductRelated;
