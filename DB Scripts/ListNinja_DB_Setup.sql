-- Setup Ninja DB

CREATE TABLE users(
fbid		NUMERIC PRIMARY KEY NOT NULL,
lastlogin	DATE,
created		DATE
);

CREATE TABLE lists(
listid		SERIAL PRIMARY KEY NOT NULL,
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
fbid INT REFERENCES users(fbid) NOT NULL,
listid INT REFERENCES lists(listid) NOT NULL,
creator BOOLEAN
);

commit;