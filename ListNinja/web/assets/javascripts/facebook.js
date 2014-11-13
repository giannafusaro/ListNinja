///////////////////////////////////////////////////////////////////////////
// Facebook
///////////////////////////////////////////////////////////////////////////

window.fbAsyncInit = function() {
  console.log('fbAsyncInit');
  
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
      window.facebook = {
        id: response.authResponse.userID,
        accessToken: response.authResponse.accessToken
      }
      redirectTo("/dashboard.jsp");
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
