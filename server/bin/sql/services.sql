CREATE TABLE services(
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(50),
  price       FLOAT,
  description VARCHAR(150),
  length      INT
);

INSERT INTO services(name, price, description, length)
VALUES
('Classic Full Set', 75, '', 90),
('Classic Fill', 35, '', 60),
('Hybrid Full Set', 85, '', 120);
