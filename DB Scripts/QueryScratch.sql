select LISTS.* FROM LISTS, USERS 
where (USERS.EMAIL = "avidey94@gmail.com") and (LISTS.USER_ID = USERS.USER_ID);

select LISTS.* FROM LISTS join USERS on (LISTS.USER_ID = USERS.USER_ID)
where (USERS.EMAIL = "avidey94@gmail.com");

select USERS.USER_ID, LISTS.LIST_NAME 
FROM USERS 
left join LISTS on USERS.USER_ID = LISTS.USER_ID;

-- every user will appear at least once whether or user ids match
select USERS.USER_ID, LISTS.LIST_NAME 
FROM USERS left join LISTS on USERS.USER_ID = LISTS.USER_ID;

-- only the ones that having matching user id's will be displayed
select USERS.USER_ID, LISTS.LIST_NAME 
FROM USERS join LISTS on USERS.USER_ID = LISTS.USER_ID;

-- ever user from Lists will appear at least once
select USERS.USER_ID, LISTS.USER_ID, LISTS.LIST_NAME 
FROM USERS right join LISTS on USERS.USER_ID = LISTS.USER_ID;

-- matrix multiply
select USERS.USER_ID, LISTS.USER_ID, LISTS.LIST_NAME 
FROM USERS cross join LISTS;

-- prints just andrew and robert since they dont have any parties
select USER_ID FROM (select USERS.USER_ID, LISTS.LIST_NAME FROM USERS left join LISTS on USERS.USER_ID = LISTS.USER_ID) as temp
where temp.LIST_NAME is NULL;

select USERS.USER_ID FROM USERS left join LISTS on USERS.USER_ID = LISTS.USER_ID 
where LIST_NAME is null;