<%-- 
    Document   : test.jsp
    Created on : Oct 20, 2014, 10:18:40 PM
    Author     : sheff
--%>

<%@page import="java.util.ArrayList"%>
<%@page language="java" import="Application.ServerAccess"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%  
    ServerAccess sa = new ServerAccess();
    ArrayList array = sa.getLastNames();
%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <% 
            while (!array.isEmpty()) {
                out.println(array.remove(0));
            }
        %>
    </body>
</html>
