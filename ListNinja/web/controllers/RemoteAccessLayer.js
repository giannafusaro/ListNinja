/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var RemoteAccessLayer = function() {
    
};

RemoteAccessLayer.prototype.getListItems = function (listid, callback) {
    $.ajax({
        type: "GET",
        url: "/GetListItems?listid=" + listid,
        dataType: "JSON",
        success : function(data) {
            callback(data);
        }
    });
};

RemoteAccessLayer.prototype.getUser = function(userid, callback) {
    $.ajax({
        type: "GET",
        url: "/GetUser?userid=" + userid,
        dataType: "JSON",
        success : function(data) {
                callback(data);
          }
    });
};

RemoteAccessLayer.prototype.getListsForUser = function(userid, callback) {
    $.ajax({
        type: "GET",
        url: "/GetListsForUser?userid=" + userid,
        dataType: "JSON",
        success : function(data) {
            callback(data);
        },
        error : function(msg) {
            //console.log(msg);
        }
    });
};

RemoteAccessLayer.prototype.getUsersForList = function(listid, callback) {
    $.ajax({
        type: "GET",
        url: "/GetUsersForList?listid=" + listid,
        dataType: "JSON",
        success : function(data) {
            callback(data);
        }
    });
};

RemoteAccessLayer.prototype.getAllUsers = function(callback) {
    $.ajax({
        type: "GET",
        url: "/GetAllUsers",
        dataType: "JSON",
        success : function(data) {
            callback(data);
        }
    });
};

RemoteAccessLayer.prototype.createNewItem = function(listid, name, callback) {
    $.ajax({
        type: "GET",
        url: "/CreateNewItem?listid=" + listid + "&name=" + name,
        dataType: "JSON",
        success : function(data) {
            callback(data);
        }
    });
};

RemoteAccessLayer.prototype.createNewList = function(userid, name, callback) {
    $.ajax({
        type: "GET",
        url: "/CreateNewList?userid=" + userid + "&name=" + name,
        dataType: "JSON",
        success : function(data) {
            callback(data);
        }
    });
};

RemoteAccessLayer.prototype.addUserToList = function(listid, userid, callback) {
    $.ajax({
        type: "GET",
        url: "/AddUserToList?listid=" + listid + "&userid=" + userid,
        dataType: "JSON",
        success : function(data) {
            callback(data);
        }
    });
};

RemoteAccessLayer.prototype.removeItem = function(itemid, callback) {
    $.ajax({
        type: "GET",
        url: "/RemoveItem?itemid=" + itemid,
        dataType: "JSON",
        success : function(data) {
            callback(data);
        }
    });
};

RemoteAccessLayer.prototype.removeList = function(listid, callback) {
    $.ajax({
        type: "GET",
        url: "/RemoveList?listid=" + listid,
        dataType: "JSON",
        success : function(data) {
            callback(data);
        }
    });
};

RemoteAccessLayer.prototype.removeUserFromList = function(userid, listid, callback) {
    $.ajax({
        type: "GET",
        url: "/RemoveUserFromList?userid=" + userid + "&listid=" + listid,
        dataType: "JSON",
        success : function(data) {
            callback(data);
        }
    });
};

RemoteAccessLayer.prototype.updateItemName = function (itemid, name, callback) {
    $.ajax({
        type: "GET",
        url: "/UpdateItemName?itemid=" + itemid + "&name=" + name,
        dataType: "JSON",
        success : function(data) {
            callback(data);
        }
    });
};

RemoteAccessLayer.prototype.updateListName = function(listid, name, callback) {
    $.ajax({
        type: "GET",
        url: "/UpdateListName?listid=" + listid + "&name=" + name,
        dataType: "JSON",
        success : function(data) {
            callback(data);
        }
    });
};