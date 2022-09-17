export interface QueryRelated {
  related_product_id: string,
}

export interface Product {
  "product_id": number,
  "name": string,
  "slogan": string,
  "description": string,
  "category": string,
  "default_price": string,
}

export interface ProductInfo extends Product {
  "features": features[]
}

export interface features {
  feature: string,
  value: string | null,
}

export interface QueryPhoto {
  style_id: number,
  name: string,
  sale_price: number | null,
  original_price: number,
  default_style: boolean,
  product_id: number,
  id: number,
  thumbnail_url: string,
  url: string
}

export interface QuerySKU {
  style_id: number,
  name: string,
  sale_price: number | null,
  original_price: number,
  default_style: boolean,
  product_id: number,
  sku_id: number,
  size: string,
  quantity: number,
}

export interface ProductStyles {
  product_id: string,
  results: ProductStyle[]
}

export interface ProductStyle {
  "style_id": number,
  "name": string,
  "original_price": number,
  "sale_price": number | null,
  "default?": boolean,
  "photos": photo[],
  "skus": { [key:string]: sku },
}

export interface photo {
  thumbnail_url: string,
  url: string,
}

export interface sku {
  quantity: number | null,
  size: number | string | null
}