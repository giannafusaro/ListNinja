<%-- 
    Document   : dashboard
    Created on : Sep 24, 2014, 2:51:37 PM
    Author     : giannafusaro
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>


<!DOCTYPE html>
<html>
  <head>
    <title>ListNinja | Dashboard</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="robots" content="noindex"/>    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'/>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
    <script src="assets/javascripts/global.js"></script>
    <script src="assets/javascripts/facebook.js"></script>
    <script src="assets/javascripts/list.js"></script>
    
    <!--Added by Sheff to get the dashboard working-->
    <script type="text/javascript" src="models/Ninja.js"></script>
    <script type="text/javascript" src="models/List.js"></script>
    <script type="text/javascript" src="models/Item.js"></script>
    <script type="text/javascript" src="models/Lists.js"></script>
    <script type="text/javascript" src="models/Ninjas.js"></script>
    <script type="text/javascript" src="models/Model.js"></script>
    <script type="text/javascript" src="controllers/RemoteAccessLayer.js"></script>
    <script type="text/javascript" src="controllers/ListController.js"></script>
    <script type="text/javascript" src="controllers/Controller.js"></script>
    <script type="text/javascript" src="controllers/NinjaController.js"></script>
    <script type="text/javascript" src="views/View.js"></script>
    
    <link rel="stylesheet" href="assets/stylesheets/list.css">
    <link rel="stylesheet" href="assets/stylesheets/dashboard.css">
    <script src="assets/javascripts/dashboard.js"></script>
  </head>
  
  <body>
    <%@include file="/views/_header.html" %>

    
    <div class="row no-margins">
      
      <!-- My Lists -->
      <div class="col-md-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h1 class="col-title">My Lists</h1>
          </div>
            
            <div class="panel-new-list">
                
            </div>

              
          <div class="panel-body">
            <button class="btn btn-info btn-lg" id="add-list">
                <span class="glyphicon glyphicon-plus"></span>
                New List
            </button>
            
                        <!--
              HERE!!!!!!!!!!!!
            -->
            
            
            <div class="list-group" id="lists-list">
<!--                <a href="#" class="list-group-item list active">
                  <h4 class="list-group-item-heading list-title"> </h4>
                  <p class="list-group-item-text list-content"> </p>
                </a>-->
            </div>
              
                        <!--
              HERE!!!!!!!!!!!!
            -->

          </div>
        </div>
      </div>
      
      <!-- Current List -->
      <div id="current-list" data-list="<!-- [JSP] insert last modifed list id here -->" class="col-md-6"></div>

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

            <ul id="collaborator-list">
              <!-- [JSP] list collaborator facebook ids -->
            </ul>

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
      <a href="#" data-template="list-of-lists-item" id="" class="list-group-item list"> 
        <h4 class="list-group-item-heading list-title">
          <span class="list-title"></span>
          <button type='button' class='close'>
            <span aria-hidden='true'>&times;</span>
            <span class='sr-only'>Close</span>
          </button>
        </h4>
      </a>
        
      <li data-template="collaborator" class="collaborator">
        <input class="collaborator-id" type="hidden" />
        <input class="collaborator-checkbox" type="checkbox" />
        <img class="collaborator-picture"></span>
        <span class="collaborator-name"></span>
        <a class="glyphicon glyphicon-remove collaborator-delete"></a>    
      </li>
      
      <div data-template="list" id="">
        <%@include file="views/_list.html" %>
      </div>
      
      <li data-template="list-item" id="list-item-template" class="list-group-item inline-form">
        <div class="inline-form-display display-item">
          <!-- <span name="price" class="badge item-price"></span> -->
          <i class="glyphicon glyphicon-pushpin"></i>
          <span name="name" class="item-name"></span>
        </div>
        <div class="inline-form-edit edit-item">
          <form id="edit-item" class="form-inline inline-switch" role="form">
            <div class="form-group">
              <input type="text" name="name" class="form-control item-name" />
            </div>
            <!--
            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon">$</span>
                <input type="text" name="price" class="form-control item-price" />
              </div>
            </div>
            -->
            <button class="btn btn-primary submit-edit-item" type="submit">
              <span class="glyphicon glyphicon-edit"></span>
              Edit Item
            </button>
          </form>
        </div>
      </li>
    </div>
    
  </body>
    <!--Added by sheff-->
    <script type="text/javascript">
      
        
        
    </script>
</html>







