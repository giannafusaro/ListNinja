/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DAL;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author sheff
 */
public class RemoveFromDB {
    
    public boolean removeItem(int itemid, Connection c) {
        try {
            
            PreparedStatement ps = c.prepareStatement("DELETE FROM items WHERE itemid = ?");
            ps.setInt(1, itemid);
            
            int result = ps.executeUpdate();
            
            c.close();
           
            return result == 1;
        } catch (SQLException ex) {
            Logger.getLogger(RemoveFromDB.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
}
