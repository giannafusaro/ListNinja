$(document).ready(function() {

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

  $(document).on('click',"button.btn.btn-primary.submit-item-add",function(){
    $(this).find("").show();
  });

});






// $("button.btn.btn-primary").click(function(){
//     $(this).parent().parent().parent().hide();
//
//     $(this).parent().parent().parent().siblings().show();
// });
//
// $("span.display-item").click(function(){
//   $(this).hide();
//   var contents = $(this).children().text();
//   var split_contents = contents.split(" ");
//   var results = [];
//
//   for ( var i = 0; i < split_contents.length - 1; i++ ) {
//     // Logs "try 0", "try 1", ..., "try 4".
//     if(split_contents[i] != "" && split_contents[i] != " ")
//         {
//           if(split_contents[i][0]=="$")
//             {
//               results[0] = split_contents[i].replace("$", "");
//             }
//           else{
//              results[1] += " " + split_contents[i];
//           }
//         }
//   }
//   var inputField = $(this).siblings().find("#add-item-input").val(results[1].replace("undefined", ""));
//   $(this).siblings().find("#price-input").val(results[0]);
//   $(this).siblings().show();
// });
