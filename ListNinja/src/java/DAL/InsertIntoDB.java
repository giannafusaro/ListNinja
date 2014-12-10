/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DAL;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author sheff
 */
public class InsertIntoDB {
    
    //-----INSERTS NEW ITEM INTO DB-----//
    public boolean createNewItem(int listid, String name, int price, Connection c) {
        try {
            Statement stmt = c.createStatement();
            
            Calendar cal = Calendar.getInstance();
            java.util.Date utilDate = cal.getTime();
            Timestamp ts = new Timestamp(utilDate.getTime());
            boolean completed = false;
            
            PreparedStatement ps = c.prepareStatement(""
                    + "INSERT INTO items(listid, name, price, completed, created, updated) "
                    + "VALUES (?, ?, ?, ?, ?, ?) RETURNING itemid");
            ps.setInt(1, listid);
            ps.setString(2, name);
            ps.setInt(3, price);
            ps.setBoolean(4, completed);
            ps.setTimestamp(5, ts);
            ps.setTimestamp(6, ts);
            
            ResultSet rs = ps.executeQuery();
            rs.next();
            int itemid = rs.getInt("itemid");
            
            String query = "INSERT INTO list_items (listid, itemid) VALUES (?,?)";
            PreparedStatement ps1 = c.prepareStatement(query);
            ps1.setInt(1, listid);
            ps1.setInt(2, itemid);
            
            int result = ps1.executeUpdate();
            
            c.close();
            return result == 1;
            
        } catch (SQLException ex) {
            Logger.getLogger(InsertIntoDB.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
    public boolean createNewList(int userid, String name, Connection c) {
        
        try {
            Calendar cal = Calendar.getInstance();
            java.util.Date utilDate = cal.getTime();
            Timestamp ts = new Timestamp(utilDate.getTime());
            
            PreparedStatement ps = c.prepareStatement("INSERT INTO lists(name, created, updated) "
                    + "VALUES (?,?,?) RETURNING listid");
            ps.setString(1, name);
            ps.setTimestamp(2, ts);
            ps.setTimestamp(3, ts);
            ResultSet rs = ps.executeQuery();
            
            
            rs.next();
            int listid = rs.getInt("listid");
            
            String query = "INSERT INTO list_users (userid, listid, creator) VALUES (?,?,?)";
            PreparedStatement ps1 = c.prepareStatement(query);
            ps1.setInt(1, userid);
            ps1.setInt(2, listid);
            ps1.setBoolean(3, true);
            
            int result = ps1.executeUpdate();
            
            c.close();
            
            return result == 1;
        } catch (SQLException ex) {
            Logger.getLogger(InsertIntoDB.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
    public boolean addUserToList(int listid, int userid, Connection c) {
        
        try {
            String query =
                    "INSERT INTO list_users (userid, listid, creator) VALUES (?,?,?)";
            PreparedStatement ps = c.prepareStatement(query);
            ps.setInt(1, userid);
            ps.setInt(2, listid);
            ps.setBoolean(3, false);
            
            int result = ps.executeUpdate();
            c.close();
            
            return result == 1;
        } catch (SQLException ex) {
            Logger.getLogger(InsertIntoDB.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
}
