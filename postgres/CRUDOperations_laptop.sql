CREATE TABLE laptop (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    stock INT NOT NULL
);

INSERT INTO laptop (name, description, price, stock)
VALUES ('MAC-BOOK', 'High-performance laptop', 99999, 10);

SELECT * FROM products;

UPDATE products
SET price = 109990
WHERE name = 'MAC-BOOK';

ALTER TABLE products
ADD COLUMN manufacturer VARCHAR(100);

DELETE FROM products
WHERE name = 'MAC-BOOK';

DROP TABLE laptop;