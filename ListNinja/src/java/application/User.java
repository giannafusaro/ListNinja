package application;
import java.sql.*;

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author giannafusaro
 */

public class User {
  
  private String email;
  private int id;
  private String facebook_id;
  private String name;
  
  public User (String email, int id, String facebook_id, String name ) {
    this.email = email;
    this.id = id;
    this.facebook_id = facebook_id;
    this.name = name;
  }
  
  public String getEmail() {
    return email;
  }
  
  public int getID() {
    return id;
  }
  
  public String getFacebookID() {
    return facebook_id;
  }
  
  public String getName() {
    return name;
  }
  
}
