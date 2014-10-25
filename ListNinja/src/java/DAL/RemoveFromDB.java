/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DAL;

import java.sql.Connection;
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
            Statement stmt = c.createStatement();
            int result = stmt.executeUpdate("DELETE FROM items WHERE itemid=" + itemid);
            c.close();
           
            return result == 1;
        } catch (SQLException ex) {
            Logger.getLogger(RemoveFromDB.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
}
