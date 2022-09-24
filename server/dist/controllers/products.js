"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const dataAccess_1 = __importDefault(require("./../dataAccess/"));
// interface productQuery {
//   page: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[] | undefined;
//   count: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[] | undefined;
// }
// type Params = {};
// type ResBody = {};
// type ReqBody = {};
// type ReqQuery = {
//     page: string | undefined,
//     count: string | undefined,
// }
const getProducts = (req, res) => {
    const page = req.query.page;
    const count = req.query.count;
    dataAccess_1.default.getProducts(page, count)
        .then((res) => console.log(res));
    res.sendStatus(200);
};
exports.getProducts = getProducts;
