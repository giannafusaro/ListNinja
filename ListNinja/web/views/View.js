/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var View = function() {
};

function selectedList() {
    $(".display-list-title").html("");
    var list = model.getFirstList();
    $(".display-list-title").append(list.name);
};
         
View.prototype.repaint = function() {
    $(".lists-panel").html("");
    var lists = model.getLists();
    for (var x in lists) {
        $(".lists-panel").append(lists[x].listid+ ": " + lists[x].name);
        $(".lists-panel").append("<br>");
    }
    selectedList();
};