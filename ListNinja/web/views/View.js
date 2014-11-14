/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var View = function() {
             
}
         
View.prototype.repaint = function() {
    $("#test").html("");
    var lists = model.getLists();
    for (var x in lists) {
        $("#test").append("[" +lists[x].name);
        var items = lists[x].items;
        for (var y in items) {
            $("#test").append("-" + items[y].name);
        }
        $("#test").append("]");
    }
};