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
        <div id="test"></div>
    </body>
   
        <script type="text/javascript">
            window.setInterval(function() {
                    $("#test").load( "/getUsersTest");
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
        </script>
</html>