/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var View = function() {
    this.listsModel = null;
    this.ninjasModel = null;
};

View.prototype.addModel = function(model) {
    this.listsModel = model.getListsModel();
    this.ninjasModel = model.getNinjasModel();
};

View.prototype.selectedList = function() {
    $(".display-list-title").html("");
    var list = this.listsModel.getFirstList();
    $(".display-list-title").append(list.name);
};
         
View.prototype.repaint = function() {
    $(".lists-panel").html("");
    var lists = this.listsModel.getLists();
    for (var x in lists) {
        $(".lists-panel").append(lists[x].listid+ ": " + lists[x].name);
        $(".lists-panel").append("<br>");
        var items = lists[x].items;
        for (var y in items) {
            $(".lists-panel").append("--" + items[y].itemid +": " + items[y].name);
            $(".lists-panel").append("<br>");
        }
    }
    this.selectedList();
};