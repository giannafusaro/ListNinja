package Application;

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

    public Connection getConnection() throws SQLException {
        return DriverManager.getConnection(url, user, pw);
    }

    public ArrayList getLastNames() {
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
            
            while(rs.next()) {
                String lastName = rs.getString("lname");
                System.out.println(lastName);
                array.add(lastName);
            }
            
        } catch (SQLException ex) {
            Logger.getLogger(ServerAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        System.out.println("Findme.now");
        return array;
    }
}
