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

Lists.prototype.getListByID = function(listid) {
    for (var x in this.lists) {
        if (this.lists[x].listid === listid) {
            return this.lists[x];
        }
    }
    return null;
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

Lists.prototype.getLists = function() {
    return this.lists;
};

Lists.prototype.addItem = function(item) {
    var list = this.getListByID(item.listid);
    list.addItem(item);
    this.view.repaint();
};

