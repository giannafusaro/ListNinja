

$("button.btn.btn-primary").click(function(){
    $(this).parent().parent().parent().hide();

    $(this).parent().parent().parent().siblings().show();
});

$("span.display-item").click(function(){
  $(this).hide();
  var contents = $(this).children().text();
  var split_contents = contents.split(" ");
  var results = [];

  for ( var i = 0; i < split_contents.length - 1; i++ ) {
    // Logs "try 0", "try 1", ..., "try 4".
    if(split_contents[i] != "" && split_contents[i] != " ")
        {
          if(split_contents[i][0]=="$")
            {
              results[0] = split_contents[i].replace("$", "");
            }
          else{
             results[1] += " " + split_contents[i];
          }
        }
  }
  var inputField = $(this).siblings().find("#add-item-input").val(results[1].replace("undefined", ""));
  $(this).siblings().find("#price-input").val(results[0]);
  $(this).siblings().show();
});
