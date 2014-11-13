<%-- 
    Document   : index
    Created on : Sep 24, 2014, 2:48:00 AM
    Author     : giannafusaro
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<html>
  <head>
    <title>ListNinja | Keeping Track and Treading Softly</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="robots" content="noindex"/>    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'/>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
    <script src="assets/javascripts/global.js"></script>
    <script src="assets/javascripts/facebook.js"></script>
    
    <link rel="stylesheet" href="assets/stylesheets/index.css">
    <script src="assets/javascripts/index.js"></script>
  </head>
  
  <body>
    <%@include file="/views/_header.html" %>

    <div class="jumbotron">
      <div class="container">
        <div class="row">
          <div id="status">
            <div class="col-sm-8">
              <img id="logo" class="img-responsive logo" src="assets/images/list-ninja.png" />
            </div>

            <div class="col-sm-4">
              <div class="login-container">
                <h1>Login with Facebook</h1>
                <div class="fb-login-button btn" data-max-rows="1" data-scope="user_friends,email" data-size="xlarge" onlogin="checkLoginState();" data-show-faces="true" data-auto-logout-link="true"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </body>
</html>