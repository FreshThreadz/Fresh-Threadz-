-- DROP DATABASE IF EXISTS products;

-- CREATE DATABASE products;

\c products;

DROP TABLE IF EXISTS features;
DROP TABLE IF EXISTS related;
DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS skus;
DROP TABLE IF EXISTS product_styles;
DROP TABLE IF EXISTS Product_Info;

CREATE TABLE Product_Info (
  product_id SERIAL,
  name VARCHAR(300),
  slogan VARCHAR(300),
  description TEXT,
  category TEXT,
  default_price INT,
  PRIMARY KEY (product_id)
);

CREATE TABLE product_styles (
  style_id SERIAL,
  name VARCHAR(50) NULL,
  sale_price INT NULL DEFAULT NULL,
  original_price INT,
  default_style BOOLEAN NULL DEFAULT FALSE,
  product_id INT NULL,
  PRIMARY KEY (style_id),
  FOREIGN KEY (product_id) REFERENCES Product_Info (product_id)
);

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  style_id INT,
  thumbnail_url TEXT,
  url TEXT,
  FOREIGN KEY (style_id) REFERENCES product_styles (style_id)
);

CREATE TABLE skus (
  sku_id INT,
  style_id INT,
  size VARCHAR(8) NULL,
  quantity INT NULL,
  PRIMARY KEY (sku_id),
  FOREIGN KEY (style_id) REFERENCES product_styles (style_id)
);


CREATE TABLE features (
  id SERIAL PRIMARY KEY,
  product_id INT,
  feature VARCHAR(50),
  value VARCHAR(100),
  FOREIGN KEY (product_id) REFERENCES Product_Info (product_id)
);

CREATE TABLE related (
  id SERIAL PRIMARY KEY,
  product_id INT,
  related_product_id INT,
  FOREIGN KEY (product_id) REFERENCES Product_Info (product_id),
  FOREIGN KEY (related_product_id) REFERENCES Product_Info (product_id)
);

\copy product_Info (product_id, name, slogan, description, category, default_price) from '/Users/aifunlook/Documents/RFP2207/rfp2207-SDC-superman/csv/product.csv' WITH (FORMAT CSV, HEADER);

\copy product_styles (style_id, product_id, name, sale_price, original_price, default_style) from '/Users/aifunlook/Documents/RFP2207/rfp2207-SDC-superman/csv/styles.csv' WITH (FORMAT CSV, HEADER, NULL 'null');

\copy features (id, product_id, feature, value) from '/Users/aifunlook/Documents/RFP2207/rfp2207-SDC-superman/csv/features.csv' WITH (FORMAT CSV, HEADER, NULl 'null');

\copy related (id, product_id, related_product_id) from '/Users/aifunlook/Documents/RFP2207/rfp2207-SDC-superman/csv/related.csv' WITH (FORMAT CSV, HEADER, NULL 0);

\copy skus (sku_id, style_id, size, quantity) from '/Users/aifunlook/Documents/RFP2207/rfp2207-SDC-superman/csv/skus.csv' WITH (FORMAT CSV, HEADER);

\copy photos (id, style_id, url, thumbnail_url) from '/Users/aifunlook/Documents/RFP2207/rfp2207-SDC-superman/csv/photos.csv' delimiter ',' quote '\' escape '"' csv header;