
<%@page language="java" import="DAL.ServerAccess"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
        <script type="text/javascript" src="models/Ninja.js"></script>
        <script type="text/javascript" src="models/List.js"></script>
        <script type="text/javascript" src="models/Item.js"></script>
        <script type="text/javascript" src="models/Lists.js"></script>
        <script type="text/javascript" src="controllers/RemoteAccessLayer.js"></script>
        <script type="text/javascript" src="controllers/ListController.js"></script>
    </head>
    <body>
        <div id="test"></div>
        
        
    </body>
    
    <script type="text/javascript">
        
        var con = new ListController();
        con.populateLists();
        var myVar = setInterval(function(){
            var lists  = con.lists.getLists();
            $("#test").html("");
            for (var j = 0; j < lists.length; j++) {
                $("#test").append(lists[j].name);
            }
        }, 5000);
        
    </script>
</html>
