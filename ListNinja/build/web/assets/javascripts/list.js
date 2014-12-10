$(document).ready(function() {
    
    // Inititalize Andrew's Framework
    var view = new View();    
    var model = new Model(view);
    var con = new Controller(model);
    view.addModel(model);
    
    console.log("CON: ", con);  

    // "Add List" button
    $('#add-list').click(function() {
      console.log("clicked!");
    
      // Create a new list and then sit it as the selected list
      //con.getListCon().createNewList('Untitled List');
      
      $.ajax({
        url: "/CreateNewList",
        type: "POST",
        data: { userid: $.cookie('listNinjaId'), name: 'Untitled List' },
        beforeSend: function() {
          console.log("createList beforeSend");
          $('#current-list').html('Loading...');
        },
        success: function(newListId) {
          console.log("new list!: ", newListId);
           view.setSelected(newListId);
        }
      });
    }); 
    
    // List of Lists
    $("#lists-list").on('click', ".list-group-item.list", function() {
        console.log("clicked!", $(this).attr('id'));
        var listid = $(this).attr('id');
        view.setSelected(listid);                    
    });

    // Destroy List
    $(document).on('click', 'button.close', function() {
       console.log("destroy button clicked!");
       var listLink = $(this).closest('a.list');
       var listid = listLink.attr('id'); 
       if(confirm('Are you sure?')) {
          $.ajax({
            url: "/RemoveList",
            type: "POST",
            data: { listid: listid, name: 'Untitled List' },
            success: function(data) {
              console.log("destroyed!: ", data);
              $('a#'+listid).remove();
              con.getListCon().removeList(listid);
              view.paintItems();
            }
          });
       } else {
           console.log("do not kill!");
       }
    });

  ///////////////////////////////////////////////////////////
  // Click on List Display (Inline Form)
  ///////////////////////////////////////////////////////////

  $(document).on('click', ".inline-form-display", function(){
    var container = $(this).closest('.inline-form');
    
    var spans = container.find('span[name]');
    console.log("spans: ", spans);

    spans.each(function(){
      var value = $(this).text();
      
      var name = $(this).attr('name');
      
      var input = container.find('input[name=' + name +']');
      

      // remove the dollar sign
      if(name=="price") {
        value = value.replace('$','');
      }

      if(value!=input.attr('placeholder')) {
        input.val(value);
      }
    });

    $(this).fadeOut('fast', function(){
      container.find('.inline-form-edit').fadeIn('fast');
    });
  });

  ///////////////////////////////////////////////////////////
  // Submit Inline Form
  ///////////////////////////////////////////////////////////

  $(document).on('submit', 'form.inline-switch', function(event) {
    event.preventDefault();
    var container = $(this).closest('.inline-form');
    var inputs = container.find('input[type=text]');

    if(validateFields(inputs)) {
      // Switch out input values with span text
      inputs.each(function(){
        value = $(this).val();
        name = $(this).prop('name');
        
        //if(name == "title") {
        //    console.log(con);
        //    con.getListCon().updateListName(view.selectedList, value);
        //}

        // Add the dollar sign
        //if(name=="price" && (value.indexOf('$') == -1)) {
        //    value = '$'+value;
        //}

        container.find('span[name=' + name +']').text(value);
      });

      // Fade to display
      container.find('.inline-form-edit').fadeOut('fast', function() {
        container.find('.inline-form-display').fadeIn('fast');
      });
    } else {
      flashMessage(container, 'One or more required fields were left blank');
    }
  });

  ///////////////////////////////////////////////////////////
  // Add Item
  ///////////////////////////////////////////////////////////

  $(document).on('submit',"form#add-item",function(event){
    event.preventDefault();
    var form = $(this);

    // validate user input to make sure fields are not empty and price is valid
    if(validateFields(form.find('input'))) {
      var name = form.find('input.item-name');
      //var price = form.find('input.item-price');

      var html = $('[data-template="list-item"]').clone();
      html.removeAttr('data-template');
      html.attr('id', 'new');
      html.find('input.item-name').val(name.val());
      html.find('span.item-name').text(name.val());
      $('#current-list ul#list-items').append(html);      

      //place focus on right most form field
      $("#add-item-name").focus();
    } else {
      flashMessage(form, 'One or more required fields were left blank');
    }
  });
  
  ///////////////////////////////////////////////////////////
  // Save List
  ///////////////////////////////////////////////////////////

  $(document).on('click','#save-list', function(event) {
     event.preventDefault();
     // TODO: Save the title and all items for the list.
     
     
//     var inputs = $('#current-list input[type=text]').map(function(){
//         return $(this).val();
//     });    
//     console.log("inputs: ", inputs);
  });

  ///////////////////////////////////////////////////////////
  // Utility
  ///////////////////////////////////////////////////////////

  // Display flash message
  function flashMessage(element, text) {
    var container = $(element).closest('.inline-form');
    container.prepend($('#flash-alert-template').html())

    var message = container.find('.flash.alert')
    message.find('span').text(text);

    // close message after 5 seconds
    message.fadeIn("fast", function(){
      setTimeout(function() {
        return message.find('.close').click();
      }, 5000);
    });
  }

  // close flash messages
  $(document).on('click', "a.close", function(){
    $(this).closest(".flash.alert").fadeOut("fast", function(){
      $(this).remove();
    });
  });

  // Check if the given fields are valid
  function validateFields(fields) {
    var validity = [];

    // Iterate over fields and validate them
    fields.each(function(){
      input = $(this)
      if(input.val()=="" || input.val()==undefined) {
        validity.push(false);
      } else {
        validity.push(true);
      }
    });

    return $.inArray(false, validity)==-1 ? true : false;
  }

});
