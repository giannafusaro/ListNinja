/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DAL;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author sheff
 */
public class UpdateTheDB {
    
    public boolean updateItemName(int itemid, String name, Connection c) {
        
        try {
            
            Calendar cal = Calendar.getInstance();
            java.util.Date utildate = cal.getTime();
            Timestamp ts = new Timestamp(utildate.getTime());
            
            PreparedStatement ps = c.prepareStatement("UPDATE items SET name=?,updated=? WHERE itemid=?");
            ps.setString(1, name);
            ps.setTimestamp(2, ts);
            ps.setInt(3, itemid);
            
            int result = ps.executeUpdate();
            
            c.close();
            return result == 1;
        } catch (SQLException ex) {
            Logger.getLogger(UpdateTheDB.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        return false;
    }
    
    public boolean updateListName(int listid, String name, Connection c) {
        
        try {
            
            Calendar cal = Calendar.getInstance();
            java.util.Date utildate = cal.getTime();
            Timestamp ts = new Timestamp(utildate.getTime());
            
            String query =
                    "UPDATE lists SET name=?,updated=? WHERE listid=?";
            PreparedStatement ps = c.prepareStatement(query);
            ps.setString(1, name);
            ps.setTimestamp(2, ts);
            ps.setInt(3, listid);
            
            int result = ps.executeUpdate();
            c.close();
            
            return result == 1;
            
        } catch (SQLException ex) {
            Logger.getLogger(UpdateTheDB.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
}
