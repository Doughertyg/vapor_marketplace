DROP DATABASE IF EXISTS steam_side;

CREATE DATABASE steam_side;

USE steam_side;

CREATE TABLE game (
  id INT AUTO_INCREMENT UNIQUE,
  hours INT NOT NULL,
  reviews VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  genre VARCHAR(255) NOT NULL,
  developer VARCHAR(255) NOT NULL,
  publisher VARCHAR(255) NOT NULL,
  published_date VARCHAR(255) NOT NULL,
  recommended VARCHAR(255),
  played VARCHAR(255)
  )


