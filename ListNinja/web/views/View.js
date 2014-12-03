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
    $("#lists-list").html("");
    var lists = this.listsModel.getLists();
    console.log("lists:", lists)
    for (var x in lists) {
        var selectedString = "";
        if (lists[x].listid == this.selectedList) {
            console.log("hit true for", this.selectedList);
            selectedString = " active";
        }
        $("#lists-list").append("<a href='#' id='" + lists[x].listid + "' class='list-group-item list " + selectedString + "'> <h4 class='list-group-item-heading.list-title'"  + "' >" + lists[x].name + "<button type='button' class='close'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button></h4>");
        $("#lists-list").append();
        $("#lists-list").append("</a>");
 

    }
    if (this.selectedList == 0) {
        this.setSelected(this.getFirstList());
    }
    this.setItemsTitle();
    this.paintItems();
};