-- this script creates all the tables neccessary for ListNinja

-- Convention: table names should be plural and in CAPS,
-- 			   attribute names are in CAPS and multiple words are seperated by an underscore "_"
-- 			   comments will be made using '--'
Use ListNinja;

-- delete and recreate USERS table
drop table if exists USERS;

-- schema for USERS table
create table USERS (
	USER_ID varchar(52) primary key,
	EMAIL varchar(52) not null unique,
	USER_PASSWORD varchar(18) not null
);

drop table if exists LISTS;

create table LISTS (
	LIST_ID INTEGER primary key,
	LIST_NAME varchar(128) not null,
	USER_ID varchar(52) not null,
	CREATE_DATE TIMESTAMP not null,
	MODIFY_DATE TIMESTAMP not null
);




