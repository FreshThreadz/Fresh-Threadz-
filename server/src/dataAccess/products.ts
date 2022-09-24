import { connection } from './../database/postgres';
import * as I from '../Utilities/interfaces';
import * as format from '../Utilities/formatData';
import * as postgres from '../Utilities/queryStrings'
import { Transform } from 'stream';

// Modify Products to return page and count
export async function getProducts (page:string = '1', count:string = '5'):Promise<I.Product[]> {
  const { rows } : { rows:[] } = await connection.query(postgres.getProducts(page, count));
  return rows;
}

export async function getProductInfo (id:string='1'):Promise<I.ProductInfo> {
  const [resultInfo, resultFeatures] = await Promise.all([
    connection.query(postgres.getProductInfo(id)),
    connection.query(postgres.getProductFeatures(id))
  ])

  const [info] = resultInfo.rows;
  const features = resultFeatures.rows

  return {...info, features};
}

export async function getProductStyles (id:string='1'):Promise<I.ProductStyles> {
  const [resultSKUs, resultPhotos] = await Promise.all([
    connection.query(postgres.getStyleSKUs(id)),
    connection.query(postgres.getStylePhotos(id))
  ]);

  const result = format.Styles(resultSKUs.rows, resultPhotos.rows)

  return { "product_id": id, results: result };
}

export async function getProductRelated (id:string='1'):Promise<string[]> {
  const { rows:result } : { rows:[] } = await connection.query(postgres.getProductRelated(id));
  const related = result.map((id:I.QueryRelated) =>  id.related_product_id );
  return related;
}