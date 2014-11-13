/*
 * Author: Sheff
 */


var Lists = function() {
    this.lists = [];
};

Lists.prototype.addList = function(list) {
    this.lists.push(list);
};

Lists.prototype.getLists = function() {
    return this.lists;
};

Lists.prototype.addItem = function(itemid, listid, name) {
    var item = new Item(itemid, listid, name);
    this.lists[listid].addItem(item);
};

