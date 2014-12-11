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
    }, 3000);
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
    var me = this;
    ral.updateItemName(itemid, name, function(data) {
        me.populateItems();
    });
};

ListController.prototype.removeItem = function(itemid) {
    var ral = new RemoteAccessLayer();
    this.listsModel.removeItem(itemid);
    ral.removeItem(itemid, function() {
    });
};

ListController.prototype.addUserToList = function(listid, fbid) {
    var ral = new RemoteAccessLayer();
    //this.listsModel.addUserToList(listid, ninja);
    ral.addUserToList(listid, fbid, function(data) {
        console.log(data);
    });
};

ListController.prototype.removeUserFromList = function(listid, fbid) {
    var ral = new RemoteAccessLayer();
    //this.listsModel.removeUserFromList(listid, ninja);
    var me = this;
    ral.removeUserFromList(listid, fbid, function(data) {
        me.populateUsers();
    });
};


////////POPULATION FROM REMOTE DATA LAYER///////////////////
ListController.prototype.populateLists = function() {
    var ral = new RemoteAccessLayer();
    var lists = this.listsModel;
    ral.getListsForUser(lists, function(data, lists) {
        if (data.length !== 0) {
            var i = 0;
            var listsArrayClone = lists.getArrayOfLists().slice(0);
            for (i = 0; i < data.length; i++) {
                if (lists.getListByID(data[i].listid) === null) {
                    lists.addList(new List(data[i].listid, data[i].name, data[i].created, data[i].updated));
                } 
                else if (lists.getListByID(data[i].listid) !== null && lists.getListByID(data[i].listid).name !== data[i].name) {
                    lists.getListByID(data[i].listid).name = data[i].name;
                }
                else {
                    var deleteThisID = data[i].listid;
                    var j = 0;
                    for (j = 0; j < listsArrayClone.length; j++) {
                        var cloneID = listsArrayClone[j].listid;
                        if (cloneID === deleteThisID) {
                            listsArrayClone.splice(j, 1);
                        }
                    }
                }
            }
            for (i = 0; i < listsArrayClone.length; i++) {
                lists.removeList(listsArrayClone[i].listid);
            }
        }
    });
};

ListController.prototype.populateItems = function() {
    var ral = new RemoteAccessLayer();
    var lists = this.listsModel.getLists();
    for (var i = 0; i < lists.length; i++) {
        ral.getListItems(lists[i].listid, this.listsModel, function(data, lists) {
            if (data.length !== 0) {
                
                var items = data;
                var itemsArrayClone = lists.getListByID(items[0].listid).items.slice(0);
                var i = 0;
                for (i = 0; i < items.length; i++) {
                    var item = new Item(items[i].itemid, items[i].listid, items[i].name, items[i].created, items[i].updated);
                    
                    if (lists.getItemByID(item.itemid) === null) {
                        lists.addItem(item);
                    } 
                    else if (lists.getItemByID(item.itemid) !== null && items[i].name !== lists.getItemByID(item.itemid).name) {
                        lists.getItemByID(item.itemid).name = items[i].name;
                    }
                    else {
                        var deleteThisID = items[i].itemid;
                        var j = 0;
                        for (j = 0; j < itemsArrayClone.length; j++) {
                            var cloneID = itemsArrayClone[j].itemid;
                            if (cloneID === deleteThisID) {
                                itemsArrayClone.splice(j, 1);
                            }
                        }
                    }
                }
                var k = 0;
                for (k = 0; k < itemsArrayClone.length; k++) {
                    lists.removeItem(itemsArrayClone[k].itemid);
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
            
            if (data.length !== 0) {
                var users = data;
                var i = 0;
                for (i = 0; i < users.length; i++) {
                    var user = new Ninja(users[i].fbid, "fName", "lName" , "picurl", users[i].lastlogin, users[i].created);
                    if (lists.getUserByID(user.fbid) === null) {
                        lists.addUserToList(listid, user);
                    }
                }
            }
            
        });
        
    }
};
