CREATE DATABASE IF NOT EXISTS ecommerce;

USE ecommerce;

CREATE TABLE `user` (
    `userid` INTEGER AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL UNIQUE,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `firstname` VARCHAR(50) NOT NULL,
    `lastname` VARCHAR(50) NOT NULL,
    `address` TEXT,
    `phone number` VARCHAR(20),
    `createdAt` DATETIME NOT NULL,
    `updatedAt` DATETIME NOT NULL
);

CREATE TABLE product (
    `product_id` INTEGER AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `description` TEXT,
    `price` DECIMAL(10, 2) NOT NULL,
    `stock_quantity` INTEGER NOT NULL,
    `category` VARCHAR(50),
    `createdAt` DATETIME NOT NULL,
    `updatedAt` DATETIME NOT NULL
);

CREATE TABLE `order` (
    `order_id` INTEGER AUTO_INCREMENT PRIMARY KEY,
    `user_id` INTEGER NOT NULL,
    `order_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `total_amount` DECIMAL(10, 2) NOT NULL,
    `status` ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    `shipping_address` TEXT NOT NULL
);
