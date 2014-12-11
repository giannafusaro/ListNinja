/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var View = function() {
    this.listsModel = null;
    this.ninjasModel = null;
    this.con = null;
    this.selectedList = 0;
};

View.prototype.addModel = function(model) {
    this.listsModel = model.getListsModel();
    this.ninjasModel = model.getNinjasModel();
};

View.prototype.addCon = function(con) {
    this.con = con;
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

View.prototype.paintCollaborators = function() {
    var collaborators = this.listsModel.getUsersForList(this.selectedList);
    
    $("#collaborator-list").html("");
    
    $.each(collaborators, function( index, value ) { 
        
        console.log("index: ",index);
        console.log("value: ",value);
        var urlstring = "/" + value.fbid; 
        if(value.fbid != $.cookie('fbid')) {
            FB.api(urlstring, function(response){
                console.log("response: ", response);
                var pictureSrc = "http://graph.facebook.com/" + value.fbid + "/picture?type=square&width=50&height=50";
                var html = $('[data-template="collaborator"]').clone();
                html.removeAttr('data-template');
                html.find('.collaborator-id').val(value.fbid);
                html.find('.collaborator-name').text(response.first_name + " " + response.last_name);     
                html.find('.collaborator-picture').attr("src", pictureSrc);
                $("#collaborator-list").append(html);  
                console.log("hit!!!");
            });
      }
    });
    
  
};

View.prototype.paintItems = function() {
    var list = this.listsModel.getListByID(this.selectedList);
    if(list != null) {
        var items = list.items;
        $('#list-items').html("");
        for (var x in items) {
            var item = items[x];
            $('#list-items').append(item.name);
            $('#list-items').append('<br>');
        }
    }
};

// Build the list of lists from template
View.prototype.paintListOfLists = function(lists) {
    var template = $('.templates [data-template="list-of-lists-item"]');
    
    $("#lists-list").html("");
    for (var x in lists) {
        var html = template.clone();
        html.removeAttr('data-template');
        html.attr('id', lists[x].listid);
        html.find('.list-title').text(lists[x].name);
        if (lists[x].listid == this.selectedList) {
            html.addClass('active');
        }   
        $("#lists-list").append(html);
    }
    
    // Default to the first list if a list isn't selected
    if (this.selectedList == 0) {
        this.setSelected(this.getFirstList());
    }
};
    
View.prototype.paintList = function(list) {
//    console.log('list: ', list);
    if(list==null) {
        $('#current-list').html('');
        return;
    }

    // Find Templates
    listTemplate = $('.templates [data-template="list"]');
    listItemTemplate = $('.templates [data-template="list-item"]');

    // Build current list from template
    listHTML = listTemplate.clone();
    listHTML.removeAttr('data-template');
    listHTML.find('input.list-title').val(list.name);
    listHTML.find('span.display-list-title').text(list.name);
  
    // Add each list item to the list
    $.each(list.items, function(){
        listItemHTML = listItemTemplate.clone();
        listItemHTML.removeAttr('data-template');
        listItemHTML.attr('id', this.itemid);
        listItemHTML.find('input.item-name').val(this.name);
        listItemHTML.find('span.item-name').text(this.name);
        listHTML.find('#list-items').append(listItemHTML);
    });
    
    // Insert list into the DOM
    $('#current-list').html(listHTML);
    $('#current-list').data('list', list.listid);
};
         
View.prototype.repaint = function() {
    console.log("Repaint called.");
    
    // Get list of lists and the current list
    var lists = this.listsModel.getLists();
    var currentList = null;
    for (var x in lists) {
        if (lists[x].listid == this.selectedList) {
            currentList = lists[x];
        }   
    }

    // Paint
    this.paintListOfLists(lists);
    this.paintList(currentList);
    this.paintCollaborators();
};



