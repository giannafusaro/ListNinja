/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ListController = function(listsModel) {
    this.listsModel = listsModel;
    this.populateLists();
    var t = this;
    setInterval(function() {
        t.populateLists();
        t.populateItems();
        t.populateUsers();
    }, 500);
};

ListController.prototype.createNewList = function(name) {
    $.ajax({
        url: "/CreateNewList",
        type: "POST",
        data: { userid: $.cookie('listNinjaId'), name: name },
        success: function(data) {
            console.log("new list! data: ", data);
        }
    });
};

ListController.prototype.updateListName = function(listid, name) {
    var ral = new RemoteAccessLayer();
    this.listsModel.updateListName(listid, name);
    var me = this;
    ral.updateListName(listid, name, function(data) {
        me.populateLists();
    });
};

ListController.prototype.removeList = function(listid) {
    var ral = new RemoteAccessLayer();
    this.listsModel.removeList(listid);
    ral.removeList(listid, function(data) {
        console.log(data);
    });
};

ListController.prototype.createNewItem = function(listid, name) {
    var ral = new RemoteAccessLayer();
    ral.createNewItem(listid, name, function(data) {
    });
};

ListController.prototype.updateItemName = function(itemid, name) {
    var ral = new RemoteAccessLayer();
    this.listsModel.updateItemName(itemid, name);
    ral.updateItemName(itemid, name, function(data) {
        this.populateItems();
    });
};

ListController.prototype.removeItem = function(itemid) {
    var ral = new RemoteAccessLayer();
    this.listsModel.removeItem(itemid);
    ral.removeItem(itemid, function() {
        console.log(data);
    });
};

ListController.prototype.addUserToList = function(listid, ninja) {
    var ral = new RemoteAccessLayer();
    this.listsModel.addUserToList(listid, ninja);
    ral.addUserToList(listid, ninja.fbid, function(data) {
        console.log(data);
    });
};

ListController.prototype.removeUserFromList = function(listid, ninja) {
    var ral = new RemoteAccessLayer();
    this.listsModel.removeUserFromList(listid, ninja);
    ral.removeUserFromList(listid, ninja.fbid, function(data) {
        this.populateUsers();
    });
};


////////POPULATION FROM REMOTE DATA LAYER///////////////////
ListController.prototype.populateLists = function() {
    var ral = new RemoteAccessLayer();
    var lists = this.listsModel;
    ral.getListsForUser(lists, function(data, lists) {
        var i = 0;
        for (i = 0; i < data.length; i++) {
            if (lists.getListByID(data[i].listid) === null) {
                lists.addList(new List(data[i].listid, data[i].name, data[i].created, data[i].updated));
            }
        }
    });
};

ListController.prototype.populateItems = function() {
    var ral = new RemoteAccessLayer();
    var lists = this.listsModel.getLists();
    for (var i = 0; i < lists.length; i++) {
        ral.getListItems(lists[i].listid, this.listsModel, function(data, lists) {
            var items = data;
            var i = 0;
            for (i = 0; i < items.length; i++) {
                var item = new Item(items[i].itemid, items[i].listid, items[i].name, items[i].created, items[i].updated);
                if (lists.getItemByID(item.itemid) === null) {
                    lists.addItem(item);
                }
            }
        });
    }
};

ListController.prototype.populateUsers = function() {
    var ral = new RemoteAccessLayer();
    var lists = this.listsModel.getLists();
    for (var i = 0; i < lists.length; i++) {
        ral.getUsersForList(lists[i].listid, this.listsModel, function(data, lists, listid) {
            var users = data;
            var i = 0;
            for (i = 0; i < users.length; i++) {
                var user = new Ninja(users[i].fbid, "fName", "lName" , "picurl", users[i].lastlogin, users[i].created);
                if (lists.getUserByID(user.fbid) === null) {
                    lists.addUserToList(listid, user);
                }
            }
        });
    }
};
