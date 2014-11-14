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
    ral.getListItems(1, function(data) {
        var items = data;
        var i = 0;
        for (i = 0; i < items.length; i++) {
            var item = new Item(items[i].itemid, items[i].listid, items[i].name, items[i].created, items[i].updated);
            if (listCon.lists.getItemByID(item.itemid) === null) {
                listCon.lists.addItem(item);
            }
        }
    });
};
