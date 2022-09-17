import express, { Express, Request, Response, Router } from "express";
export const router = Router();

import products from './controllers/';

router.get('/', products.getProducts)

router.get('/:id', products.getProductInfo)

router.get('/:id/styles', products.getProductStyles)

router.get('/:id/related', products.getProductRelated)