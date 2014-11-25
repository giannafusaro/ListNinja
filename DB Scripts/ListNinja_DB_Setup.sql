-- Setup Ninja DB

CREATE TABLE users(
userid		SERIAL 	PRIMARY KEY NOT NULL,
fbid		VARCHAR(255),
email		VARCHAR(255),
lastlogin	TIMESTAMP,
created		TIMESTAMP
);

CREATE TABLE lists(
listid		SERIAL PRIMARY KEY NOT NULL,
name		VARCHAR(255),
created		TIMESTAMP,
updated		TIMESTAMP
);

CREATE TABLE items(
itemid		SERIAL PRIMARY KEY NOT NULL,
listid		INT REFERENCES lists(listid),
name		VARCHAR(255),
created		TIMESTAMP,
price		INT,
updated		TIMESTAMP
);

CREATE TABLE list_users(
userid INT REFERENCES users(userid) NOT NULL,
listid INT REFERENCES lists(listid) NOT NULL,
creator BOOLEAN
);

CREATE TABLE list_items(
listid INT REFERENCES lists(listid) NOT NULL,
itemid INT REFERENCES items(itemid) NOT NULL
);

commit;