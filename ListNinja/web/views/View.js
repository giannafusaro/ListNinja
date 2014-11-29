/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var View = function() {
    this.listsModel = null;
    this.ninjasModel = null;
    this.selectedList = 0;
};

View.prototype.addModel = function(model) {
    this.listsModel = model.getListsModel();
    this.ninjasModel = model.getNinjasModel();
};

View.prototype.getFirstList = function() {
    var list = this.listsModel.getFirstList();
    return list.listid;
};

View.prototype.setItemsTitle = function() {
    var list = this.listsModel.getListByID(this.selectedList);
    $(".display-list-title").html("");
    $(".display-list-title").append(list.name);
};

View.prototype.setSelected = function(listid) {
    this.selectedList = listid;
    this.repaint();
};

View.prototype.paintItems = function() {
    var list = this.listsModel.getListByID(this.selectedList);
    var items = list.items;
    $('#list-items').html("");
    for (var x in items) {
        var item = items[x];
        $('#list-items').append(item.name);
        $('#list-items').append('<br>');
    }
};
         
View.prototype.repaint = function() {
    $(".lists-panel").html("");
    var lists = this.listsModel.getLists();
    for (var x in lists) {
        var selectedString = "";
        if (lists[x].listid == this.selectedList) {
            selectedString = "list-name-selected";
        }
        $(".lists-panel").append("<div id='" + lists[x].listid + "' class='list-name " + selectedString + "' >" + lists[x].name);
        $(".lists-panel").append("</div><br>");
        /*var items = lists[x].items;
        for (var y in items) {
            $(".lists-panel").append("--" + items[y].itemid +": " + items[y].name);
            $(".lists-panel").append("<br>");
        }*/
    }
    if (this.selectedList == 0) {
        this.setSelected(this.getFirstList());
    }
    this.setItemsTitle();
    this.paintItems();
};