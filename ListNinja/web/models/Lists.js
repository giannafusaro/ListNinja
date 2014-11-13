/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Lists = function() {
    this.lists = [];
};

Lists.prototype.addList = function(listid, name) {
    var list = new List(listid, name);
    this.lists[listid] = list;
};

Lists.prototype.addItem = function(itemid, listid, name) {
    var item = new Item(itemid, listid, name);
    if (this.lists[listid] !== undefined) {
        this.lists[listid].addItem(item);
    }
};

