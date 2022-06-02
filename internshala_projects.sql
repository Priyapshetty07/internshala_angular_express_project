CREATE DATABASE Internshala_project;
USE Internshala_project;

CREATE TABLE register(
id int NOT NULL auto_increment  PRIMARY KEY,
email varchar(25) NOT NULL ,
paswd varchar(25) NOT NULL,
firstname varchar(25) NOT NULL,
lastname varchar(25) NOT NULL
);


CREATE TABLE internships(
id Int NOT NULL,
email varchar(25) NOT NULL ,
firstname varchar(25) NOT NULL,
lastname varchar(25) NOT NULL,
title varchar(30) NOT NULL,         
sub varchar(20) NOT NULL,
location varchar(20) NOT NULL
);

CREATE TABLE jobs(
id Int NOT NULL,
email varchar(25) NOT NULL ,
firstname varchar(25) NOT NULL,
lastname varchar(25) NOT NULL,
title varchar(30) NOT NULL,         
sub varchar(20) NOT NULL,
location varchar(20) NOT NULL
);








