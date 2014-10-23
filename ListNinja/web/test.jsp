<%-- 
    Document   : test.jsp
    Created on : Oct 20, 2014, 10:18:40 PM
    Author     : sheff
--%>

<%@page import="java.util.ArrayList"%>
<%@page language="java" import="Application.ServerAccess"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
        
    </head>
    <body>
        </br>
        <form id="createUserTest">
            First name: <input class="textField" type="text" name="fname"><br>
            Last name: <input class="textField" type="text" name="lname"><br>
            <input class="submitButton" type="button" value="Submit">
        </form>
        
        <h3>Users</h3>
        <div id="users"></div>
        <hr>
        <form id="createList">
            Name: <input class="textField" type="text" name="name"><br>
            User ID: <input class="textField" type="text" name="userid"><br>
            <input class="submitButtonList" type="button" value="Submit">
        </form>
        <h3>Lists</h3>
        Get lists by userid: <input id="userforlist" type="text" value="1"><br>
        <div id="lists" style="float:left"></div>
    </body>
   
        <script type="text/javascript">
            var json;
            window.setInterval(function() {
                    $.ajax({
                        type: "GET",
                        url: "/getUsersTest",
                        dataType: "JSON",
                        success : function(data) {
                                json = data;
                                $("#users").text("");
                                
                                for (var i = 0; i < json.length; i++) {
                                    var usr = json[i];
                                    $("#users").append(usr.id + ") " +usr.fname + " "+ usr.lname + "</br>");
                                }
                            }
                      });
                      
                      $.ajax({
                        type: "GET",
                        url: "/getLists?userid=" + $("#userforlist").val(),
                        dataType: "JSON",
                        success : function(data) {
                                lists = data;
                                $("#lists").text("");
                                
                                for (var i = 0; i < lists.length; i++) {
                                    var list = lists[i];
                                    $("#lists").append(list.listid + ") " + list.name + "</br>");
                                }
                            }
                      });
                      
                }, 
                1000
            );
    
            
    
            $(".submitButton").click(function() {
                var url = $("#createUserTest").serialize();
                $(".textField").each(function() {
                    $(this).val("");
                });
                $.ajax("CreateUser?"+url);
            });
            
            $(".submitButtonList").click(function() {
                var url = $("#createList").serialize();
                $(".textField").each(function() {
                    $(this).val("");
                });
                $.ajax("CreateList?"+url);
            });
        </script>
</html>