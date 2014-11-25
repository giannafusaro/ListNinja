/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DAL;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author sheff
 */
public class RemoveFromDB {
    
    public boolean removeItem(int itemid, Connection c) {
        try {
            
            PreparedStatement ps = c.prepareStatement("DELETE FROM list_items WHERE itemid = ?");
            ps.setInt(1, itemid);
            
            int result = ps.executeUpdate();
            
            c.close();
           
            return result == 1;
        } catch (SQLException ex) {
            Logger.getLogger(RemoveFromDB.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
    public boolean removeList(int listid, Connection c) {
        
        try {
            String query =
                    "DELETE FROM list_users WHERE listid=?";
            PreparedStatement ps = c.prepareStatement(query);
            ps.setInt(1, listid);
            int result = ps.executeUpdate();
            c.close();
            return result == 1;
        } catch (SQLException ex) {
            Logger.getLogger(RemoveFromDB.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
    public boolean removeUserFromList(int userid, int listid, Connection c) {
        try {
            String query =
                    "DELETE FROM list_users WHERE listid=? AND userid=?";
            PreparedStatement ps = c.prepareStatement(query);
            ps.setInt(1, listid);
            ps.setInt(2, userid);
            
            int result = ps.executeUpdate();
            
            c.close();
            return result == 1;
            
        } catch (SQLException ex) {
            Logger.getLogger(RemoveFromDB.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
}
