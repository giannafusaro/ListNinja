/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DAL;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
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
            Date sqldate = new Date(utildate.getTime());
            
            PreparedStatement ps = c.prepareStatement("UPDATE items SET name=?,updated=? WHERE itemid=?");
            ps.setString(1, name);
            ps.setDate(2, sqldate);
            ps.setInt(3, itemid);
            
            int result = ps.executeUpdate();
            
            c.close();
            return result == 1;
        } catch (SQLException ex) {
            Logger.getLogger(UpdateTheDB.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        return false;
    }
}
