/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

import java.beans.*;
import java.io.Serializable;
import java.util.ArrayList;

/**
 *
 * @author Buser
 */
public class NinjaItemBean implements Serializable {
    
    public static final String PROP_SAMPLE_PROPERTY = "sampleProperty";
    
    private String sampleProperty;
    
    private PropertyChangeSupport propertySupport;
    
    //NinjaItem Variables
    private String itemName;
    private double itemPrice;
    ArrayList<String> ownerList = new ArrayList<String>();
    
    /**Sets item price
     * 
    */
   public void setPrice(double  itemPrice){
       this.itemPrice = itemPrice;
   }
   /**Constructs a NinjaList
     * 
    */
   public double getPrice(){
       return itemPrice;
   }
   /**Rename item
     * 
    */
   public void setName(String itemNewName){
       itemName = itemNewName;
   }
   /**Get item name
     * 
    */
   public String getName(){
       return itemName;
    }
   /**Add responsible owner
     * 
    */
   public void addOwner(String owner){
       ownerList.add(owner);
    }
   /**Remove owner no longer responsible
     * 
    */
   public void removeOwner(String owner){
       ownerList.remove(owner); 
    }
   /**Get number of owners
     * 
    */
   public int numOfOwners(){
       return ownerList.size(); 
    }
    
    public NinjaItemBean() {
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
