/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package models;
import java.beans.*;
import java.io.Serializable;
import java.sql.*;
import application.CreateUser;
/**
 *
 * @author giannafusaro
 */
public class Ninja implements Serializable {
    
    //NinjaItem Variables
    private String email;
    private String fName;
    private String lName;
    private int facebook_id;
    private String last_login;
    
    
    public Ninja (int fb_id, String first_name, String last_name, String l_login, String email_add ) throws SQLException {
      fb_id = facebook_id;
      first_name = fName;
      last_name = lName;
      l_login = last_login;
      email_add = email;
     
     Connection conn = DriverManager.getConnection("jdbc:derby://localhost:1527/ListNinja");
     String query = "INSERT ";
    }
    
//    
//    private boolean exists(int fb_id) {
//      
//    }
//    
    /**Sets set email
     * 
    */
   public void setEmail(String newEmail){
       email = newEmail;
   }
   /**Get email
     * 
    */
   public String getEmail(){
       return email;
   }
   /**Sets first name
     * 
    */
   public void setFName(String newFNAme){
       fName = newFNAme;
   }
   /**Get first name
     * 
    */
   public String getFName(){
       return fName;
   }
   /**Set last name
     * 
    */
   public void setLName(String newLNAme){
       lName = newLNAme;
   }
   /**Get Last Name
     * 
    */
   public String getLName(){
       return lName;
   }
    
    public static final String PROP_SAMPLE_PROPERTY = "sampleProperty";
    
    private String sampleProperty;
    
    private PropertyChangeSupport propertySupport;
    
    public Ninja() {
        propertySupport = new PropertyChangeSupport(this);
    }
    
    public String getSampleProperty() {
        return sampleProperty;
    }
    
    public void setSampleProperty(String value) {
        String oldValue = sampleProperty;
        sampleProperty = value;
        propertySupport.firePropertyChange(PROP_SAMPLE_PROPERTY, oldValue, sampleProperty);
    }
    
    public void addPropertyChangeListener(PropertyChangeListener listener) {
        propertySupport.addPropertyChangeListener(listener);
    }
    
    public void removePropertyChangeListener(PropertyChangeListener listener) {
        propertySupport.removePropertyChangeListener(listener);
    }
  
  
  
}
