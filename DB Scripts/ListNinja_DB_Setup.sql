-- Setup Ninja DB

CREATE TABLE users(
userid		SERIAL	PRIMARY KEY NOT NULL,
fbid		VARCHAR(255),
fname		VARCHAR(255),
lname		VARCHAR(255),
lastlogin	DATE,
created		DATE
);

CREATE TABLE lists(
listid		SERIAL PRIMARY KEY NOT NULL,
--userid		INT REFERENCES users(userid),
name		VARCHAR(255),
created		DATE,
updated		DATE
);

CREATE TABLE items(
itemid		SERIAL PRIMARY KEY NOT NULL,
listid		INT REFERENCES lists(listid),
name		VARCHAR(255),
created		DATE,
price		INT,
updated		DATE
);

CREATE TABLE list_users(
userid INT REFERENCES users(userid) NOT NULL,
listid INT REFERENCES lists(listid) NOT NULL,
creator BOOLEAN
);

commit;