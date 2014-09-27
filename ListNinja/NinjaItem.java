
import java.util.ArrayList;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Buser
 */
public class NinjaItem {
    
    //NinjaItem Variables
    private String itemName;
    private double itemPrice;
    ArrayList<String> ownerList = new ArrayList<String>();
    
    /**Constructs a NinjaList
     * 
    */
   public NinjaItem(String itemName)
   {   
	  this.itemName = itemName;
   }
   
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
   
}
