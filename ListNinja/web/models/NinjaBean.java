/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

import java.beans.*;
import java.io.Serializable;

/**
 *
 * @author Buser
 */
public class NinjaBean implements Serializable {
    
    //NinjaItem Variables
    private String email;
    private String fName;
    private String lName;
    
    
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
    
    public NinjaBean() {
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
