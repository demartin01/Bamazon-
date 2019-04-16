DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(30),
    department_name VARCHAR(30),
    price DECIMAL(6,2),
    stock_quantity INT,
    PRIMARY KEY (item_id)
);

INSERT INTO products(product_name,department_name, price, stock_quantity)
VALUES("chairs", "furniture", 50.00, 4);

INSERT INTO products(product_name,department_name, price, stock_quantity)
VALUES("lamps", "furniture", 50.00, 4);

INSERT INTO products(product_name,department_name, price, stock_quantity)
VALUES("clocks", "furniture", 50.00, 4);

INSERT INTO products(product_name,department_name, price, stock_quantity)
VALUES("bed", "furniture", 50.00, 4);

INSERT INTO products(product_name,department_name, price, stock_quantity)
VALUES("vase", "furniture", 50.00, 4);

INSERT INTO products(product_name,department_name, price, stock_quantity)
VALUES("table", "furniture", 50.00, 4);

INSERT INTO products(product_name,department_name, price, stock_quantity)
VALUES("couch", "furniture", 50.00, 4);

INSERT INTO products(product_name,department_name, price, stock_quantity)
VALUES("planter", "furniture", 50.00, 4);

INSERT INTO products(product_name,department_name, price, stock_quantity)
VALUES("chaise", "furniture", 50.00, 4);

INSERT INTO products(product_name,department_name, price, stock_quantity)
VALUES("grill", "furniture", 50.00, 4);


