$("#loginBtn").click(function() {
  //if loginEmail == example@listninja.net && loginPassword == 1234 > reroute to dashboard
  var loginEmail = $("#loginEmail").val();
  var loginPassword = $("#loginPassword").val();
  
  if (loginEmail == "example@listninja.net" && loginPassword == "1234") {
    window.location.replace("list/_list.html");
  } 
  else {
    $(".alert").show();
  }
  
});

$(".close").click(function() {
  $(".alert").hide();
});