/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ListController = function() {
    this.lists = new Lists();
};

ListController.prototype.populateLists = function() {
    var ral = new RemoteAccessLayer();
    ral.getListsForUser(1, function(data) {
        var i = 0;
        for (i = 0; i < data.length; i++) {
            con.lists.addList(new List(data[i].listid, data[i].name, data[i].created, data[i].updated));
        }
    });
    //new List(data.listid, data.fname, data.created, data.modified)
};
