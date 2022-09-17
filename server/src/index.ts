import express, { Express, Request, Response } from "express";
import { router } from './routes';
import fs from 'fs';

import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// connectionDemo();

app.use(express.json());
app.use('/products', router);

app.get('/', (req: Request, res: Response) => {
  res.setHeader('content-type', 'text/html').sendFile('/Users/aifunlook/Documents/RFP2207/rfp2207-SDC-superman/client/dist/index.html');
});

app.get('/bundle.js', (req: Request, res: Response) => {
  res.setHeader('content-type', 'application/javascript').sendFile('/Users/aifunlook/Documents/RFP2207/rfp2207-SDC-superman/client/dist/bundle.js');
});


// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`)
});