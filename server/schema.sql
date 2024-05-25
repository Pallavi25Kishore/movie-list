CREATE DATABASE movies;

USE movies;

CREATE TABLE movielist (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(200) NOT NULL,
  watched TINYINT NOT NULL
);

