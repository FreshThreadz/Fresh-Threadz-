"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// connectionDemo();
app.use(express_1.default.json());
app.use('/products', routes_1.router);
app.get('/', (req, res) => {
    res.setHeader('content-type', 'text/html').sendFile('/Users/aifunlook/Documents/RFP2207/rfp2207-SDC-superman/client/dist/index.html');
});
app.get('/bundle.js', (req, res) => {
    res.setHeader('content-type', 'application/javascript').sendFile('/Users/aifunlook/Documents/RFP2207/rfp2207-SDC-superman/client/dist/bundle.js');
});
// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });
app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
