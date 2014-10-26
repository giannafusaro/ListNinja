/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import DAL.ServerAccess;
import org.json.simple.JSONArray;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assert;
import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

/**
 *
 * @author sheff
 */
public class ServerAccessTests {
    
    public ServerAccessTests() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
    @Test
    public void testInsertItemIntoDB() {
        ServerAccess sa = new ServerAccess();
        for (int i = 0; i< 10; i++) {
            boolean bool = sa.createNewItem(1, "Test"+i);
            assertEquals(true, bool);
        }
    }
    
    @Test
    public void testGetItemsFromDB() {
        ServerAccess sa = new ServerAccess();
        JSONArray items = sa.getListItems(1);
        System.out.println(items.toJSONString());
    }
    
    @Test
    public void testUpdateNameForItem() {
        ServerAccess sa = new ServerAccess();
        sa.updateItemName(146, "HELLOWORLD");
    }
    
    @Test
    public void testDeleteItemFromDB() {
        ServerAccess sa = new ServerAccess();
        //sa.removeItem(135);
    }
    
    @Test
    public void testGetAllUsers() {
        ServerAccess sa = new ServerAccess();
        System.out.println(sa.getAllUsers());
    }
}
