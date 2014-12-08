package DAL;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
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
    
    String url = "jdbc:postgresql://"+ host + ":" + port +"/"+ db + "?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory";

    RemoveFromDB rem = new RemoveFromDB();
    InsertIntoDB insert = new InsertIntoDB();
    GetFromDB get = new GetFromDB();
    UpdateTheDB update = new UpdateTheDB();
    
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

    //--------GET COMMANDS-------//
    public JSONObject getUser(String fbid) {
        try {
            return get.getUser(fbid, getConnection());
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }
    
    public int getUserID(String fbid, String email) {
        try {
            return get.getUserID(fbid, email, getConnection());
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return 0;
    }
    
    public JSONArray getAllUsers() {
        try {
            return get.getAllUsers(getConnection());
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    } 
      
    public JSONArray getListItems(int listid) {
        try {
            return get.getListItems(listid, getConnection());
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }
    
    public JSONArray getListsForUser(int userid) {
        try {
            return get.getListsForUser(userid, getConnection());
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }
    
    public JSONArray getUsersForList(int listid) {
        try {
            return get.getUsersForList(listid, getConnection());
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }
    
    //--------INSERT COMMANDS------//
    public boolean createNewItem(int listid, String name) {
        try {
            return insert.createNewItem(listid, name, getConnection());
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
    public int createNewList(int userid, String name) {
        try {
            return insert.createNewList(userid, name, getConnection());
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return 0;
    }
    
    public boolean addUserToList(int listid, int userid) {
        try {
            return insert.addUserToList(listid, userid, getConnection());
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
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
        try {
            return rem.removeList(listid, getConnection());
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
    public boolean removeUserFromList(int userid, int listid) {
        try {
            return rem.removeUserFromList(userid, listid, getConnection());
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
    //-------UPDATE COMMANDS------//
    public boolean updateItemName(int itemid, String name) {
        try {
            return update.updateItemName(itemid, name, getConnection());
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
    public boolean updateListName(int listid, String name) {
        try {
            return update.updateListName(listid, name, getConnection());
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
    public int find_or_create_user_by_fbid(String fbid) {
        try {         
            // Get the ListNinja ID for FBID if it exists...
            String query = "SELECT userid FROM users WHERE fbid=?";
            PreparedStatement ps = getConnection().prepareStatement(query);
            ps.setString(1, fbid);
            ResultSet rs = ps.executeQuery();
            
            // If user doesn't exist, make one!    
            if(!rs.next()) {
                query = "INSERT INTO users (fbid) VALUES (?)";
                ps = getConnection().prepareStatement(query);
                ps.setString(1, fbid);
                int update = ps.executeUpdate();
                
                if(update > 0) {
                    query = "SELECT userid FROM users WHERE fbid=?";
                    ps = getConnection().prepareStatement(query);
                    ps.setString(1, fbid);
                    rs = ps.executeQuery();
                    rs.next();
                }
            }
            
            // Return the ID
            return rs.getInt("userid");   
        } catch (Exception ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return 0;    
    }
 
}
