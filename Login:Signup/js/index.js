$("#loginBtn").click(function() {
  //if loginEmail == example@listninja.net && loginPassword == 1234 > reroute to dashboard
  var loginEmail = $("#loginEmail").val();
  var loginPassword = $("#loginPassword").val();
  
  if (loginEmail == "example@listninja.net" && loginPassword == "1234") {
    alert("Login Success");
  } 
  else {
    $(".alert").show();
  }
  
});

$(".close").click(function() {
  $(".alert").hide();
});