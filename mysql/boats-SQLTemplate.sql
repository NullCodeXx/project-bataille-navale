/* 
 * DATABASES OF BATAILLE NAVALE / FIRT TABLE SQL TEMPLATE.
 */
/**
 * Author:  SOolOoCrakOo
 * Created: 28 juil. 2017
 */


/*
    Table User.
*/

DROP DATABASE if exist `bataille-navale`;

CREATE DATABASE `bataille-navale`;

CREATE TABLE `boats` (
    id INT auto_increment PRIMARY KEY,
    `pays` VARCHAR(128) NOT NULL,
    `pseudo`VARCHAR(32) NOT NULL,
    `power` INT,
    `life` INT,
    `ammunition` INT,
    `armement` VARCHAR(128),
)

ALTER TABLE 
