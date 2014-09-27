/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Buser
 */
public class Ninja {
    
    //NinjaItem Variables
    String email;
    String fName;
    String lName;
    
    
    /**Constructs a NinjaList
     * 
    */
   public Ninja(String email, String fName, String lName)
   {   
       this.email = email;
       this.fName = fName;
       this.lName = lName;
   } 
   
   /**Sets item price
     * 
    */
   public void setEmail(String newEmail){
       email = newEmail;
   }
   /**Constructs a NinjaList
     * 
    */
   public String getEmail(){
       return email;
   }
   /**Sets item price
     * 
    */
   public void setFName(String newFNAme){
       fName = newFNAme;
   }
   /**Constructs a NinjaList
     * 
    */
   public String getFName(){
       return fName;
   }
   /**Sets item price
     * 
    */
   public void setLName(String newLNAme){
       lName = newLNAme;
   }
   /**Constructs a NinjaList
     * 
    */
   public String getLName(){
       return lName;
   }
}
