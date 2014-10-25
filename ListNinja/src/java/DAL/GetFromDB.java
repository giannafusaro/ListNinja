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
import java.util.logging.Level;
import java.util.logging.Logger;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/**
 *
 * @author sheff
 */
public class GetFromDB {
    
    public JSONArray getItemsFromList(int listid, Connection c) {
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
                item.put("created", rs.getDate("created"));
                item.put("updated", rs.getDate("updated"));
                
                items.add(item);
            }
            
        } catch (SQLException ex) {
            Logger.getLogger(GetFromDB.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        return items;
    }
}
