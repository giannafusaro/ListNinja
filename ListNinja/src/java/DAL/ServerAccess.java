package DAL;

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class ServerAccess {
    String host = "ec2-54-197-239-171.compute-1.amazonaws.com";
    String port = "5432";
    String db = "d67772fhjn618h";
    String user = "xiqafnlfvewlxi";
    String pw = "OskGmiLhSeBDaHzCC0BNJsUYPc";
    int connections = 0;

    String url = "jdbc:postgresql://"+ host + ":" + port +"/"+ db + "?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory";

    RemoveFromDB rem = new RemoveFromDB();
    InsertIntoDB insert = new InsertIntoDB();
    
    /**
     * Gets Connection to sql database being used for ListNinja
     * @return Connection to hard coded remote postgres server
     * @throws SQLException if connection cannot be made
     */
    private Connection getConnection() throws SQLException {
        try {
                Class.forName("org.postgresql.Driver");
            } catch (ClassNotFoundException ex) {
                Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
            }
        return DriverManager.getConnection(url, user, pw);
    }

    /**
     * Runs a SELECT * FROM users on specified fieldName
     * @return ArrayList for the field specified 
     *
    public JSONArray getAllUsers() {
        JSONArray users = new JSONArray();
        try {
            Connection c = getConnection();
            stmt = c.createStatement();
            rs = stmt.executeQuery("SELECT * FROM users");
            
            c.close();
            
            while(rs.next()) {

                JSONObject user = new JSONObject();
                
                user.put("id", rs.getInt("userid"));
                user.put("fname", rs.getString("fname"));
                user.put("lname", rs.getString("lname"));
                
                users.add(user);
            }
            
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return users;
    }*/
    
    /*
    public boolean createUser(String fname, String lname) {
        try {
            Connection c = getConnection();
            stmt = c.createStatement();
            stmt.executeUpdate("INSERT INTO users(fname, lname) VALUES ('"+fname+"', '"+lname+"')");

            c.close();
            return true;
            
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
            return false;
        }
    }*/
    
    /**
     * Accepts a listid of a specific list and returns a JSON Array
     * of all the users that are associated with the specified list.
     * @param listid
     * @param name
     * @param listID
     * @return JSONArray of users associated with listID
     *
    public JSONArray getUsersForList(int listID) {
        JSONArray users = new JSONArray();
        String query = "SELECT * FROM users WHERE listid = listid";
        try {
              
            Connection c = getConnection();
            stmt = c.createStatement();
            
            rs = stmt.executeQuery(query);
            
            c.close();
            
            while (rs.next()) {
                JSONObject user = new JSONObject();
                
                user.put("id", rs.getInt("userid"));
                user.put("fname", rs.getString("fname"));
                user.put("lname", rs.getString("lname"));
                
                users.add(user);
            }

        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return users;
    }*/
    
    /*
    public JSONArray getListItems(int listid) {
        JSONArray items = new JSONArray();
        String query = "SELECT * FROM items WHERE listid = " + listid;
        try {
            Connection c = getConnection();
            stmt = c.createStatement();
            rs = stmt.executeQuery(query);
            c.close();
            
            while (rs.next()) {
                JSONObject item = new JSONObject();
                
                item.put("itemid", rs.getInt("itemid"));
                item.put("listid", rs.getInt("listid"));
                item.put("name", rs.getString("name"));
                item.put("created", rs.getDate("created"));
                item.put("updated", rs.getDate("updated"));
                
                items.add(item);
            }
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return items;
    }*/
    
    public boolean createNewItem(int listid, String name) {
        try {
            return insert.insertNewItem(listid, name, getConnection());
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
    /*
    public JSONArray getUserLists(int userid) {
        JSONArray lists = new JSONArray();
        try {

            Connection c = getConnection();
            stmt = c.createStatement();
            rs = stmt.executeQuery("SELECT name FROM lists JOIN list_users ON lists.listid = list_users.listid UNION SELECT name FROM lists WHERE lists.userid =" + userid);
            c.close();
            
            while (rs.next()) {
                JSONObject list = new JSONObject();
                list.put("createdby", rs.getInt("userid"));
                list.put("listid", rs.getInt("listid"));
                list.put("name", rs.getString("name"));
                lists.add(list);
            }

        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return lists;
    }
    
    public boolean createNewList(int userid, String name) {
        try {
            Connection c = getConnection();
            stmt = c.createStatement();
            
            String query = "INSERT INTO lists(userid, name) VALUES (" + userid + ", '" + name + "')";
            
            int checkresult = stmt.executeUpdate(query);
            c.close();
            
            return checkresult == 1;
            
            
            
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
            
        }
        return false;
    }*/
    
    
    //-------REMOVE COMMANDS-------//
    public boolean removeItem(int itemid) {     
        try {
            return rem.removeItem(itemid, getConnection());
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
    public boolean removeList(int listid) {
        return false;
    }
    
    public boolean removeUserFromList(int userid, int listid) {
        return false;
    }
}
