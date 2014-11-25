/*
 * Author: Sheff
 */


var Lists = function(view) {
    this.view = view;
    this.lists = [];
};

Lists.prototype.addList = function(list) {
    this.lists.push(list);
    this.view.repaint();
};

Lists.prototype.updateListName = function(listid, name) {
    var list = this.getListByID(listid);
    list.name = name;
    this.view.repaint();
};

Lists.prototype.updateItemName = function(itemid, name) {
    var item = this.getItemByID(itemid);
    item.name = name;
    this.view.repaint();
};

Lists.prototype.getListByID = function(listid) {
    for (var x in this.lists) {
        if (this.lists[x].listid === listid) {
            return this.lists[x];
        }
    }
    return null;
};

Lists.prototype.getLists = function() {
    return this.lists;
};

Lists.prototype.getFirstList = function() {
    return this.lists[0];
};

Lists.prototype.searchListsByName = function(string) {
    var lists = [];
    for (var x in this.lists) {
        var listName = this.lists[x].name;
        listName = listName.toLowerCase();
        string = string.toLowerCase();
        if (listName.indexOf(string) !== -1) {
            lists.push(this.lists[x]);
        }
    }
    return lists;
};

Lists.prototype.removeList = function(listid) {
    var list = this.getListByID(listid);
    var i = this.lists.indexOf(list);
    if(i !== -1) {
        this.lists.splice(i, 1);
    }
    this.view.repaint();
};

Lists.prototype.addItem = function(item) {
    var list = this.getListByID(item.listid);
    list.addItem(item);
    this.view.repaint();
};

Lists.prototype.getItemByID = function(itemid) {
    for (var x in this.lists) {
            var list = this.lists[x];
            for (var y in list.items) {
                if (list.items[y].itemid === itemid) {
                    return list.items[y];
                }
            }
    }
    return null;
};

Lists.prototype.searchItemByName = function(listid, string) {
    var items = [];
    var list = this.getListByID(listid);
    for (var x in list.items) {
        var itemName = list.items[x].name;
        itemName = itemName.toLowerCase();
        string = string.toLowerCase();
        if (itemName.indexOf(string) !== -1) {
            items.push(list.items[x]);
        }
    }
    return items;
};

Lists.prototype.removeItem = function (itemid) {
    var item = this.getItemByID(itemid);
    var list = this.getListByID(item.listid);
    list.removeItem(item);
    this.view.repaint();
};

Lists.prototype.addUserToList = function(listid, ninja) {
    var list = this.getListByID(listid);
    list.addUser(ninja);
    this.view.repaint();
};

Lists.prototype.getUserByID = function(fbid) {
    for (var x in this.lists) {
        var list = this.lists[x];
        for (var y in list.users) {
            if (list.users[y].fbid === fbid) {
                return list.user[y];
            }
        }
    }
    return null;
};

Lists.prototype.removeUserFromList = function(listid, userid) {
    var list = this.getListByID(listid);
    var ninja = this.getUserByID(userid);
    list.removeUser(ninja);
    this.view.repaint();
};