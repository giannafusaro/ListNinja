/*
 * Item
 * Item data model
 *@author Buser
 */


/**Constructs a Item  with a name, price and list of responsible owners
	*@param name of the item 
	*@param price price of the item
	*@param ninja the users email address
    */
 var Item = function(itemid,listid,name,created,updated)
 {
 	this.itemid = itemid;
 	this.listid = listid;
    this.name = name;
    this.price = price;
    this.created = created;
    this.updated = updated;
    //this.users = [];
    //tis.users.push(ninja);
 }

/**Adds a Ninja to the item for co-ownership
	*@param ninja a co-owner to be added to the list
    */
List.prototype.addUser = function(ninja)
{
	this.users.push(ninja);
}

/**Removes a Ninja from the item of responcible owners
	*@param ninja a co-owner to be added to the list
    */
List.prototype.removeUser = function(ninja)
{
	// Find and remove item from an array
	var i = this.users.indexOf(ninja);
	if(i != -1) {
	this.users.splice(i, 1);
	}
}
