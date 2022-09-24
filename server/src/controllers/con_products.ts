import { Request, Response, RequestHandler } from "express";
import { json } from "stream/consumers";
import dataAccessProducts from '../dataAccess';
import * as I from '../Utilities/interfaces';

export const getProducts = (req: Request, res: Response):void => {
  const page:any = req.query.page;
  const count:any = req.query.count;
  dataAccessProducts.getProducts(page, count)
  .then((result:I.Product[]) =>
    res.status(200).json(result)
  )
  .catch((err) => console.log(err));
}

export const getProductInfo = (req: Request, res: Response):void => {
  const id:any = req.params.id;
  dataAccessProducts.getProductInfo(id)
  .then((result) =>
    res.status(200).json(result)
  )
  .catch((err) => (
    res.sendStatus(500),
    console.log(err)
  ));
}

export const getProductStyles = (req: Request, res: Response):void => {
  const id:any = req.params.id;
  dataAccessProducts.getProductStyles(id)
  .then((result) =>
    res.status(200).json(result)
  )
  .catch((err) => (
    res.sendStatus(400),
    console.log(err)
  ));
}

export const getProductRelated = (req: Request, res: Response):void => {
  const id:any = req.params.id;
  dataAccessProducts.getProductRelated(id)
  .then((result) =>
    res.status(200).json(result)
  )
  .catch((err) => (
    res.sendStatus(400),
    console.log(err)
  ));
}