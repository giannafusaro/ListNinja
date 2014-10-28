<%-- 
    Document   : dashboard
    Created on : Sep 24, 2014, 2:51:37 PM
    Author     : giannafusaro
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page import="application.*" %>
<%@include file="/views/header.html" %>


<!DOCTYPE html>
<html>
  <head>
    <title>Dashboard Page</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="robots" content="noindex"/>    
    <link rel="stylesheet" href="assets/stylesheets/global.css">
    <link rel="stylesheet" href="assets/stylesheets/list.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'/>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
    <script src="assets/javascripts/dashboard.js"></script>
  </head>
  
  <body>
    
    <div class="row no-margins">
      
      <!-- My Lists -->
      <div class="col-md-3">
        <div class="panel panel-default">
          <div class="panel-heading"><h1 class="col-title">My Lists</h1></div>
          <div class="panel-body">
            Panel content
          </div>
        </div>
      </div>
      
      <!-- Current List -->
      <div id="current-list" class="col-md-6">
        <%@include file="views/_list.html" %>
      </div>

      <!-- Collaborators -->
      <div class ="col-md-3">
        <div class="panel panel-default">
          
          <div class="panel-heading">
            <h1 class="col-title">Collaborators</h1>
          </div>
          
          <div class="panel-body">
            <button class="btn btn-info btn-lg" id="add-collaborator" data-toggle="modal" data-target="#add-collaborators">
              <span class="glyphicon glyphicon-user"></span>
              Add Collaborator
            </button>

            <ul id="collaborator-list"></ul>

            <!-- Modal -->
            <div class="modal fade" id="add-collaborators" tabindex="-1" role="dialog" aria-labelledby="collaborator-label" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                      <span aria-hidden="true">&times;</span>
                      <span class="sr-only">Close</span>
                    </button>
                    <h4 class="modal-title" id="collaborator-label">Add Friends To Your List</h4>
                  </div>
                  <div class="modal-body">
                    <ul id="modal-collaborator-list"></ul>
                  </div>
                  <div class="modal-footer">
                    <button type="button" id="close-modal" class="btn btn-default close-modal" data-dismiss="modal">Close</button>
                    <button type="button" id="add-friend-submit" class="btn btn-primary" data-dismiss="modal">Add Friend</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Modal -->
            
           </div>
         </div>
       </div>
    </div>
  
    <div class="templates">
      <li data-template="collaborator" class="collaborator">
        <input class="collaborator-id" type="hidden" />
        <input class="collaborator-checkbox" type="checkbox" />
        <img class="collaborator-picture"></span>
        <span class="collaborator-name"></span>
        <a class="glyphicon glyphicon-remove collaborator-delete"></a>    
      </li>
    </div>
    
    

  </body>
</html>







