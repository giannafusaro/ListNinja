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

RemoteAccessLayer.prototype.getUser = function(fbid, ninjas, callback) {
    $.ajax({
        type: "GET",
        url: "/GetUser?fbid=" + fbid,
        dataType: "JSON",
        success : function(data) {
                callback(data, ninjas);
          },
          error : function(data) {
              console.log("fail");
          }
    });
};

RemoteAccessLayer.prototype.getListsForUser = function(callback) {
    $.ajax({
        type: "GET",
        url: "/GetListsForUser",
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

RemoteAccessLayer.prototype.addUserToList = function(listid, fbid, callback) {
    $.ajax({
        type: "GET",
        url: "/AddUserToList?listid=" + listid + "&fbid=" + fbid,
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