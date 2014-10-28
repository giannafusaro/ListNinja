/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function getListItems(listid) {
    $.ajax({
        type: "GET",
        url: "/GetListItems?=listid" + listid,
        dataType: "JSON",
        success : function(data) {
                var items = data;
                return items;
        }
    });
}

function getUser(userid) {
    $.ajax({
        type: "GET",
        url: "/GetUser?=userid" + userid,
        dataType: "JSON",
        success : function(data) {
                var user = data;
                return user;
        }
    });
}

function getListsForUser(userid) {
    $.ajax({
        type: "GET",
        url: "/GetListsForUser?=userid" + userid,
        dataType: "JSON",
        success : function(data) {
            var lists = data;
            return lists;
        }
    });
}

function getUsersForList(listid) {
    $.ajax({
        type: "GET",
        url: "/GetUsersForList?=listid" + listid,
        dataType: "JSON",
        success : function(data) {
            var users = data;
            return users;
        }
    });
}

function getAllUsers() {
    $.ajax({
        type: "GET",
        url: "/GetAllUsers",
        dataType: "JSON",
        success : function(data) {
            var users = data;
            return users;
        }
    });
}

function createNewItem(listid, name) {
    $.ajax({
        type: "GET",
        url: "/CreateNewItem?=listid" + listid + "&name=" + name,
        dataType: "JSON",
        success : function(data) {
            return data;
        }
    });
}

function createNewList(userid, name) {
    $.ajax({
        type: "GET",
        url: "/CreateNewList?=userid" + userid + "&name=" + name,
        dataType: "JSON",
        success : function(data) {
            return data;
        }
    });
}

function addUserToList(listid, userid) {
    $.ajax({
        type: "GET",
        url: "/AddUserToList?=listid" + listid + "&userid=" + userid,
        dataType: "JSON",
        success : function(data) {
            return data;
        }
    });
}

function removeItem(itemid) {
    $.ajax({
        type: "GET",
        url: "/RemoveItem?=itemid" + itemid,
        dataType: "JSON",
        success : function(data) {
            return data;
        }
    });
}

function removeList(listid) {
    $.ajax({
        type: "GET",
        url: "/RemoveList?=listid" + listid,
        dataType: "JSON",
        success : function(data) {
            return data;
        }
    });
}

function removeUserFromList(userid, listid) {
    $.ajax({
        type: "GET",
        url: "/RemoveUserFromList?=userid" + userid + "&listid=" + listid,
        dataType: "JSON",
        success : function(data) {
            return data;
        }
    });
}

function updateItemName(itemid, name) {
    $.ajax({
        type: "GET",
        url: "/UpdateItemName?=itemid" + itemid + "&name=" + name,
        dataType: "JSON",
        success : function(data) {
            return data;
        }
    });
}

function updateListName(listid, name) {
    $.ajax({
        type: "GET",
        url: "/UpdateListName?=listid" + listid + "&name=" + name,
        dataType: "JSON",
        success : function(data) {
            return data;
        }
    });
}