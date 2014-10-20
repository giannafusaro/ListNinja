truncate table USERS;

Insert into USERS(USER_ID, EMAIL, USER_PASSWORD)
Values 
("avi","avidey94@gmail.com", "aviPassword"),
("gianna", "giannafusaro389@gmail.com", "giannaPassword"),
("andrew", "sheffieldusmc@gmail.com", "andrewPassword"),
("robert", "supplyguyusmc@yahoo.com", "robertPassword");

truncate table LISTS;
Insert into LISTS(LIST_ID, LIST_NAME, USER_ID, CREATE_DATE, MODIFY_DATE)
Values
(1, "Halloween Party", "avi", "2014-10-16 04:00:02", "2014-10-16 04:00:02"),
(2, "CS160 Party", "gianna", "2014-10-18 04:00:02", "2014-10-16 04:00:02"),
(3, "Christmas Party", "avi", "2014-10-16 04:00:02", "2014-10-16 04:00:02"),
(4, "New Years Party", "Dr, Mak", "2014-10-16 04:00:02", "2014-10-16 04:00:02");