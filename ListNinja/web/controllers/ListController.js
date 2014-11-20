/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ListController = function(model) {
    this.lists = model;
    populateLists();
    setInterval(function(){
        populateLists();
        populateItems();
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
    this.lists.updateListName(listid, name);
    ral.updateListName(listid, name, function(data) {
        this.populateLists();
    });
};

ListController.prototype.removeList = function(listid) {
    var ral = new RemoteAccessLayer();
    this.lists.removeList(listid);
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
    this.lists.updateItemName(itemid, name);
    ral.updateItemName(itemid, name, function(data) {
        this.populateItems();
    });
};

ListController.prototype.removeItem = function(itemid) {
    var ral = new RemoteAccessLayer();
    this.lists.removeItem(itemid);
    ral.removeItem(itemid, function() {
        this.populateItems();
    });
};

ListController.prototype.addUserToList = function(listid, userid) {
    var ral = new RemoteAccessLayer();
    ral.addUserToList(listid, userid, function(data) {
        var ninja = listCon.getUserByID(userid);
        listCon.addUserToList(listid, ninja);
        console.log(data);
        this.populateUsers();
    });
};

ListController.prototype.removeUserFromList = function(listid, userid) {
    var ral = new RemoteAccessLayer();
    ral.removeUserFromList(userid, listid, function(data) {
        listCon.removeUserFromList(listid, userid);
        console.log(data);
        this.populateUsers();
    });
};

var populateLists = function() {
    var ral = new RemoteAccessLayer();
    ral.getListsForUser(1, function(data) {
        var i = 0;
        for (i = 0; i < data.length; i++) {
            if (listCon.lists.getListByID(data[i].listid) === null) {
                listCon.lists.addList(new List(data[i].listid, data[i].name, data[i].created, data[i].updated));
            }
            
        }
    });
};

var populateItems = function() {
    var ral = new RemoteAccessLayer();
    var lists = this.model.getLists();
    for (var i = 0; i < lists.length; i++) {
        ral.getListItems(lists[i].listid, function(data) {
            var items = data;
            var i = 0;
            for (i = 0; i < items.length; i++) {
                var item = new Item(items[i].itemid, items[i].listid, items[i].name, items[i].created, items[i].updated);
                if (listCon.lists.getItemByID(item.itemid) === null) {
                    listCon.lists.addItem(item);
                }
            }
        });
    }
};

var populateUsers = function() {
    
};
