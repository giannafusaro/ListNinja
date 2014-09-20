$(document).ready(function() {

  //edit item in list
  $(document).on('click',".inline-form.edit-item button",function(){
    var container = $(this).closest('li')
    var itemTitle = container.find("input.item-name").val();
    var itemPrice = container.find("input.item-price").val();

    container.find("div.item-title").text(itemTitle);
    container.find("span.badge.price").text("$" + itemPrice);

    container.find('.edit-item').fadeOut("fast", function(){
      container.find('.display-item').fadeIn("fast");
    });
  });

  //show edit item form
  $(document).on('click',".inline-form.display-item",function(){
    var container = $(this).closest('li');
    var itemTitle = container.find("div.item-title").text().trim();
    var itemPrice = container.find("span.badge.price").text().replace("$", "");

    container.find("input.item-name").val(itemTitle);
    container.find("input.item-price").val(itemPrice);

    $(this).fadeOut("fast", function() {
      container.find(".edit-item").fadeIn("fast");
    });
  });

  //show edit title form
  $(document).on('click',"div.display-title",function(){
    var listTitle = $(this).text().trim();
    $("input.list-title").val(listTitle);
    $(this).hide();
    $(this).prev().show();
  });

  //save title
  $(document).on('click',"button.submit-save-title",function(){
    console.log("clicked");
    var newListTitle = $("input.list-title").val().trim();
    $("h1").text(newListTitle);
    $("span.edit-title").hide();
    $("div.display-title").show();
  });

  //add item
  $(document).on('submit',"form#add-item",function(event){
    //clear error borders for fresh submit
    $("#add-item-name").css("border-color", "#ccc");
    $("#add-item-price").css("border-color", "#ccc");

    //validate user input to make sure fields are not empty and price is valid
    event.preventDefault();
    var itemName = $(this).parent().find("input.item-name").val();
    var itemPrice = $(this).parent().find("input.item-price").val();

    //validate item name and price
    if(!validatePrice(itemPrice)&&!itemName) {
      flashMessage("Please enter an item name and valid price", 0);
    }
    //validate price
    else if(!validatePrice(itemPrice)) {
      flashMessage("Please enter a valid price", 1);
    }
    //validate name is not empty
    else if(!itemName)
      {
        flashMessage("Please enter an item name", 2);
      }

    //if user input is valid, use template item and append to existing list
    else {
      $("#list-item-template").find("div.item-title").text(itemName);
      $("#list-item-template").find("span.price").text("$" + itemPrice);

      var listItemTemplate = $("#list-item-template").html();

      $("#list-item-template").parent().append(listItemTemplate);

      $(this).parent().find("input.item-name").val("");
      $(this).parent().find("input.item-price").val("");

      //place focus on right most form field
      $("#add-item-name").focus();
    }
  });

  //close flash messages
  $(document).on('click', "a.close", function(){
    $("#flash-message").fadeOut("fast", function(){
    });
  });

  //display flash message
  function flashMessage(message, num) {
    $("#flash-message").text(message);
    $("#flash-message").append('<a href="#" data-dismiss="alert" class="close"> x</a>');

    if(num =="2") {
      $("#add-item-name").css("border-color", "#b94a48");
    }
    else if(num=="1") {
      $("#add-item-price").css("border-color", "#b94a48");
    }
    else if(num=="0") {
      console.log("hit 0")
      $("#add-item-name").css("border-color", "#b94a48");
      $("#add-item-price").css("border-color", "#b94a48");
    }
    $("#flash-message").fadeIn("fast", function(){
      setTimeout(function() {
        return $('a.close').click();
      }, 5000);
    });
  }

  //validate price
  function validatePrice(input) {
    var input = input.toString();
    var m = input.match(/^(\d+)?([.]?\d{0,2})?$/);
    if(m == null||input==false) {
      return false;
    }
    else {
      return true;
    }
  }

});
