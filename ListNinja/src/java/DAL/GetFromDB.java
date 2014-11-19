
package DAL;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/**
 *
 * @author sheff
 */
public class GetFromDB {
    
    public JSONArray getListItems(int listid, Connection c) {
        JSONArray items = new JSONArray();
        
        try {
            PreparedStatement ps = c.prepareStatement("SELECT * FROM items WHERE listid = ?");
            ps.setInt(1, listid);
            
            ResultSet rs = ps.executeQuery();
            
            c.close();
            
            while (rs.next()) {
                JSONObject item = new JSONObject();
                
                item.put("itemid", rs.getInt("itemid"));
                item.put("listid", rs.getInt("listid"));
                item.put("name", rs.getString("name"));
                item.put("created", rs.getTimestamp("created").toString());
                item.put("updated", rs.getTimestamp("updated").toString());
                
                items.add(item);
            }
            
        } catch (SQLException ex) {
            Logger.getLogger(GetFromDB.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        return items;
    }
    
    public JSONObject getUser(int userid, Connection c) {
        JSONObject user = new JSONObject();
        try {

            String query = "SELECT * FROM users WHERE userid=?";
            PreparedStatement ps = c.prepareStatement(query);
            ps.setInt(1, userid);
            ResultSet rs = ps.executeQuery();
            
            c.close();
            
            while (rs.next()) {
                user.put("userid", rs.getInt("userid"));
                user.put("fbid", rs.getInt("fbid"));
                user.put("fname", rs.getString("fname"));
                user.put("lname", rs.getString("lname"));
                user.put("lastlogin", rs.getTimestamp("lastlogin"));
                user.put("created", rs.getTimestamp("created"));
            }
            
            
        } catch (SQLException ex) {
            Logger.getLogger(GetFromDB.class.getName()).log(Level.SEVERE, null, ex);
        }
        return user;
    }
    
    public JSONArray getListsForUser(int userid, Connection c) {
        JSONArray lists = new JSONArray();
        try {
            
            String query = "SELECT lists.listid, name, created, updated, creator FROM lists JOIN list_users ON lists.listid = list_users.listid WHERE list_users.userid = ?";
            PreparedStatement ps = c.prepareStatement(query);
            ps.setInt(1, userid);
            ResultSet rs = ps.executeQuery();
            
            c.close();
            
            while (rs.next()) {
                JSONObject list = new JSONObject();
                
                list.put("listid", rs.getInt("listid"));
                list.put("name", rs.getString("name"));
                list.put("created", rs.getTimestamp("created").toString());
                list.put("updated", rs.getTimestamp("updated").toString());
                
                lists.add(list);
            }
        } catch (SQLException ex) {
            Logger.getLogger(GetFromDB.class.getName()).log(Level.SEVERE, null, ex);
        }
        return lists;
    }
    
    public JSONArray getUsersForList(int listid, Connection c) {
        JSONArray users = new JSONArray();

        try {
            String query = "SELECT DISTINCT users.userid, fname, lname, lastlogin, created FROM users JOIN list_users ON users.userid = list_users.userid WHERE list_users.userid = ?";
            PreparedStatement ps = c.prepareStatement(query);
            ps.setInt(1, listid);
            
            ResultSet rs = ps.executeQuery();
            
            c.close();
            
            while (rs.next()) {
                JSONObject user = new JSONObject();
                
                user.put("userid", rs.getInt("userid"));
                //user.put("fbid", rs.getInt("fbid"));
                user.put("fname", rs.getString("fname"));
                user.put("lname", rs.getString("lname"));
                user.put("lastlogin", rs.getTimestamp("lastlogin"));
                user.put("created", rs.getTimestamp("created"));
                
                users.add(user);
            }
            
        } catch (SQLException ex) {
            Logger.getLogger(GetFromDB.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        return users;
    }
    
    public JSONArray getAllUsers(Connection c) {
        JSONArray users = new JSONArray();
        try {

            String query = "SELECT * FROM users";
            PreparedStatement ps = c.prepareStatement(query);
            ResultSet rs = ps.executeQuery();
            
            c.close();
            
            while (rs.next()) {
                JSONObject user = new JSONObject();
                
                user.put("userid", rs.getInt("userid"));
                user.put("fbid", rs.getInt("fbid"));
                user.put("fname", rs.getString("fname"));
                user.put("lname", rs.getString("lname"));
                user.put("lastlogin", rs.getTimestamp("lastlogin"));
                user.put("created", rs.getTimestamp("created"));
                
                users.add(user);
            }
            
            
        } catch (SQLException ex) {
            Logger.getLogger(GetFromDB.class.getName()).log(Level.SEVERE, null, ex);
        }
        return users;
    }
    
    public int getUserID (String fbid, String email, Connection c) {
        int userid = 0;
        try {
            String query = "SELECT userid FROM users WHERE fbid = ?";
            PreparedStatement ps = c.prepareStatement(query);
            ps.setString(1, fbid);
            ResultSet rs = ps.executeQuery();
            
            rs.next();
            userid = rs.getInt("userid");
            
            if (userid == 0) {
                query = "INSERT INTO users(fbid, email) VALUES(?, ?) RETURNING userid";
                ps.setString(1, fbid);
                ps.setString(2, email);
                ps = c.prepareStatement(query);
                rs = ps.executeQuery();
                
                rs.next();
                userid = rs.getInt("userid");
            }
            return userid;
            
        } catch (SQLException ex) {
            Logger.getLogger(GetFromDB.class.getName()).log(Level.SEVERE, null, ex);
        }
        return 0;
    }
    
}
