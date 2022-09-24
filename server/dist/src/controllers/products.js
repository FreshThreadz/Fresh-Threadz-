"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
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
    const query = req.query.page;
    console.log(query);
    res.sendStatus(200);
};
exports.getProducts = getProducts;
