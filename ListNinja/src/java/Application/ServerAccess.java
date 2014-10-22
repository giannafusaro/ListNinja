package Application;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
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
    int connections = 0;

    String url = "jdbc:postgresql://"+ host + ":" + port +"/"+ db + "?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory";

    ArrayList<Connection> conns = new ArrayList();
    Statement stmt = null;
    ResultSet rs = null;
    
    /**
     * Gets Connection to sql database being used for ListNinja
     * @return Connection to hard coded remote postgres server
     * @throws SQLException if connection cannot be made
     */
    private Connection getConnection() throws SQLException {
        Connection c = null;
        if (connections < 3) {
            c = DriverManager.getConnection(url, user, pw);
            connections++;
        } else {
            while (c == null) {
                c = conns.remove(0);
            }
        }
        return c;
    }

    /**
     * Runs a SELECT * FROM users on specified fieldName
     * @return ArrayList for the field specified 
     */
    public JSONArray getUsers() {
        JSONArray users = new JSONArray();
        try {
            try {
                Class.forName("org.postgresql.Driver");
            } catch (ClassNotFoundException ex) {
                Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
            }
            Connection c = getConnection();
            stmt = c.createStatement();
            rs = stmt.executeQuery("SELECT * FROM users");
            //conns.add(c);
            c.close();
            
            while(rs.next()) {

                JSONObject user = new JSONObject();
                
                user.put("id", rs.getInt("userid"));
                user.put("fname", rs.getString("fname"));
                user.put("lname", rs.getString("lname"));
                
                users.add(user);
            }
            
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return users;
    }
    
    public void createUser(String fname, String lname) {
        try {
            try {
                Class.forName("org.postgresql.Driver");
            } catch (ClassNotFoundException ex) {
                Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
            }
            Connection c = getConnection();
            stmt = c.createStatement();
            stmt.executeUpdate("INSERT INTO users(fname, lname) VALUES ('"+fname+"', '"+lname+"')");
            conns.add(c);
            
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
