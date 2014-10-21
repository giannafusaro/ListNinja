package Application;

import static java.lang.System.out;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;



public class ServerAccess {
    String host = "ec2-54-197-239-171.compute-1.amazonaws.com";
    String port = "5432";
    String db = "d67772fhjn618h";
    String user = "xiqafnlfvewlxi";
    String pw = "OskGmiLhSeBDaHzCC0BNJsUYPc";

    String url = "jdbc:postgresql://"+ host + ":" + port +"/"+ db + "?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory";

    Connection c = null;
    Statement stmt = null;
    ResultSet rs = null;
    
    /**
     * Gets Connection to sql database being used for ListNinja
     * @return Connection to hard coded remote postgres server
     * @throws SQLException if connection cannot be made
     */
    private Connection getConnection() throws SQLException {
        return DriverManager.getConnection(url, user, pw);
    }

    /**
     * Runs a SELECT * FROM users on specified fieldName
     * @return ArrayList for the field specified 
     */
    public ArrayList getField(String fieldName) {
        ArrayList array = new ArrayList();
        try {
            try {
                Class.forName("org.postgresql.Driver");
            } catch (ClassNotFoundException ex) {
                Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
            }
            c = getConnection();
            stmt = c.createStatement();
            rs = stmt.executeQuery("SELECT * FROM users");
            c.close();
            while(rs.next()) {
                String lastName = rs.getString(fieldName);
                array.add(lastName);
            }
            
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return array;
    }
    
    public void createUser(String fname, String lname) {
        try {
            try {
                Class.forName("org.postgresql.Driver");
            } catch (ClassNotFoundException ex) {
                Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
            }
            c = getConnection();
            stmt = c.createStatement();
            stmt.executeUpdate("INSERT INTO users(fname, lname) VALUES ('"+fname+"', '"+lname+"')");
            c.close();
            
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
