/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ListController = function(listsModel) {
    this.listsModel = listsModel;
    populateLists();
    setInterval(function(){
        populateLists();
        populateItems();
        populateUsers();
    }, 3000);
};

ListController.prototype.createNewList = function(name) {
    var ral = new RemoteAccessLayer();
    ral.createNewList(1, name, function(data) {
        this.populateLists();
    });
};

ListController.prototype.updateListName = function(listid, name) {
    var ral = new RemoteAccessLayer();
    this.listsModel.updateListName(listid, name);
    ral.updateListName(listid, name, function(data) {
        this.populateLists();
    });
};

ListController.prototype.removeList = function(listid) {
    var ral = new RemoteAccessLayer();
    this.listsModel.removeList(listid);
    ral.removeList(listid, function(data) {
        this.populateLists();
    });
};

ListController.prototype.createNewItem = function(listid, name) {
    var ral = new RemoteAccessLayer();
    ral.createNewItem(listid, name, function(data) {
        this.populateItems();
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
        this.populateItems();
    });
};

ListController.prototype.addUserToList = function(listid, ninja) {
    var ral = new RemoteAccessLayer();
    this.listsModel.addUserToList(listid, ninja);
    ral.addUserToList(listid, ninja.fbid, function(data) {
        this.populateUsers();
    });
};

ListController.prototype.removeUserFromList = function(listid, ninja) {
    var ral = new RemoteAccessLayer();
    this.listsModel.removeUserFromList(listis, ninja);
    ral.removeUserFromList(listid, ninja.fbid, function(data) {
        this.populateUsers();
    });
};

var populateLists = function() {
    var ral = new RemoteAccessLayer();
    ral.getListsForUser(function(data) {
        var i = 0;
        for (i = 0; i < data.length; i++) {
            if (con.getListCon().lists.getListByID(data[i].listid) === null) {
                con.getListCon().lists.addList(new List(data[i].listid, data[i].name, data[i].created, data[i].updated));
            }
            
        }
    });
};

var populateItems = function() {
    var ral = new RemoteAccessLayer();
    var lists = this.listsModel.lists;
    for (var i = 0; i < lists.length; i++) {
        ral.getListItems(lists[i].listid, function(data) {
            var items = data;
            var i = 0;
            for (i = 0; i < items.length; i++) {
                var item = new Item(items[i].itemid, items[i].listid, items[i].name, items[i].created, items[i].updated);
                if (this.lists.getItemByID(item.itemid) === null) {
                    this.lists.addItem(item);
                }
            }
        });
    }
};

var populateUsers = function() {
    var ral = new RemoteAccessLayer();
    var lists = this.model.getLists();
    for (var i = 0; i < lists.length; i++) {
        ral.getUsersForList(lists[i].listid, function(data) {
            var users = data;
            var i = 0;
            for (i = 0; i < users.length; i++) {
                var user = new Ninja(users[i].fbid, users[i].fName, users[i].lName, "", users[i].lastlogin, users[i].created);
                if (this.lists.getUserByID(user.fbid) === null) {
                    this.lists.addUserToList(listid, user);
                }
            }
        });
    }
};
