CREATE TABLE users (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    fullname VARCHAR(200) NOT NULL,
    email VARCHAR(320) NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT "user"
);