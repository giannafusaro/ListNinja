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
import java.sql.Statement;
import java.util.Calendar;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author sheff
 */
public class InsertIntoDB {
    
    //-----INSERTS NEW ITEM INTO DB-----//
    public boolean insertNewItem(int listid, String name, Connection c) {
        try {
            Statement stmt = c.createStatement();
            
            Calendar cal = Calendar.getInstance();
            java.util.Date utilDate = cal.getTime();
            Date date = new Date(utilDate.getTime());
            
            PreparedStatement ps = c.prepareStatement("INSERT INTO items(listid, name, created, updated) VALUES (?, ?, ?, ?)");
            ps.setInt(1, listid);
            ps.setString(2, name);
            ps.setDate(3, date);
            ps.setDate(4, date);
            
            int result = ps.executeUpdate();
            c.close();
            return result == 1;
            
        } catch (SQLException ex) {
            Logger.getLogger(InsertIntoDB.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
}
