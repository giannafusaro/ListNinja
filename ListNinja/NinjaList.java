
import java.util.HashMap;
import java.util.Map;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Buser
 */
public class NinjaList {
    
    //NinjaList Variables
    String NLName;
    //Map<String,ListItem > list = new HashMap<String,ListItem>();
    
    /**Constructs a NinjaList
     * 
     * 
     * 
    */
   public NinjaList(String listName)
   {   
	  NLName = listName;
   }
   /**Rename list
     * 
    */
   public void setName(String listNewName){
       NLName = listNewName;
   }
   /**Get list name
     * 
    */
   public String getName(){
       return NLName;
    }
    
 
    
}
