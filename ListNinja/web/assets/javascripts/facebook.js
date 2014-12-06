///////////////////////////////////////////////////////////////////////////
// Facebook
///////////////////////////////////////////////////////////////////////////

window.fbAsyncInit = function() {
  FB.init({
    appId      : '1487237978203661',
    cookie     : true,  // enable cookies to allow the server to access the session
    xfbml      : true,
    version    : 'v2.1',
    status     : true
  });
  
  checkLoginState();
};

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      
      // Add Facebook info to cookie
      $.cookie('fbid', response.authResponse.userID);
      $.cookie('accessToken', response.authResponse.accessToken);

      // Find or create user then and redirect
      $.ajax({
        url: "/authenticate",
        method: 'POST',
        data: { fbid: response.authResponse.userID },
        success: function(data, textStatus, jqXHR) {
          console.log("[ ajax success ] data: ", data);
          
           if(parseInt(data['userid']) > 0) {
             $.cookie('listNinjaId', data['userid']);
             redirectTo('/dashboard.jsp');
           } else {
             console.log("Well, that didn't work.");
             console.log("data: ", data);
             redirectTo("/");
           }
        }
      });
    } else {
      console.log("not connected");
      redirectTo("/");
    }
  });  
}

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
  }
  (document, 'script', 'facebook-jssdk')
);
