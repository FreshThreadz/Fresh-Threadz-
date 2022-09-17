export const getProducts = (page:string, count:string):string => `SELECT * FROM product_info LIMIT ${Number(page) * Number(count)}`

export const getProductInfo = (id:string):string => `SELECT * FROM product_info WHERE product_id=${id}`

export const getProductFeatures = (id:string):string => `SELECT feature, value FROM features WHERE product_id=${id}`

export const getProductRelated = (id:string):string => `SELECT related_product_id FROM related WHERE product_id=${id}`

export const getStyleSKUs = (id:string):string => `
  SELECT
    *
  FROM
    product_styles
  INNER JOIN
    skus
  ON
    product_styles.style_id = skus.style_id
  WHERE
    product_styles.product_id = ${id};
`
export const getStylePhotos = (id:string):string => `
  SELECT
    *
  FROM
    product_styles
  INNER JOIN
    photos
  ON
    product_styles.style_id = photos.style_id
  WHERE
    product_styles.product_id = ${id};
`

// export const getProductStyles = (id:string):string => `
//   SELECT
//   *
//   FROM product_styles
//   RIGHT JOIN skus
//   ON product_styles.style_id = skus.style_id
//   RIGHT JOIN photos
//   ON product_styles.style_id = photos.style_id
//   WHERE product_styles.product_id = ${id};
// `



// SELECT * FROM product_styles
// INNER JOIN photos
// ON product_styles.product_id_Product_Info=photos.style_id
// WHERE product_styles.product_id_Product_Info = 1;



// SELECT * FROM product_styles
// LEFT JOIN photos
// ON product_styles.product_id_Product_Info=photos.style_id
// LEFT JOIN skus
// ON product_styles.product_id_Product_Info=skus.style_id_product_styles
// WHERE product_styles.product_id_Product_Info = 1;

// SELECT
// product_styles.style_id,
// product_styles.name,
// product_styles.original_price,
// product_styles.sale_price,
// product_styles.default_style,
// photos.thumbnail_url,
// photos.url,
// skus.sku_id,
// skus.quantity,
// skus.size
// FROM product_styles
// LEFT JOIN photos
// ON product_styles.product_id_Product_Info = photos.style_id
// LEFT JOIN skus
// ON product_styles.product_id_Product_Info = skus.style_id_product_styles
// WHERE product_styles.product_id_Product_Info = ${id};

// SELECT
// product_styles.style_id,
// product_styles.name,
// product_styles.original_price,
// product_styles.sale_price,
// product_styles.default_style,

// photos.thumbnail_url,
// photos.url

// FROM
// product_styles
// INNER JOIN
// photos
// ON
// product_styles.style_id = photos.style_id
// WHERE
// product_styles.product_id = ${id};