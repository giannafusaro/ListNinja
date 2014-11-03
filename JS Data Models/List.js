/*
 * List
 * List data model
 *@author Buser
 */


/**Constructs a List  with an name and an array of users.
	*@param fName the users first name 
	*@param name the lists  name
    */
 var List = function(listid,name,created,updated)
 {
 	this.listid = listid;
 	this.created = created;
 	this.updated = updated;
    this.name = name;
    this.users = [];
    this.items = [];
 }

/**Adds a Ninja to the list for co-ownership
	*@param ninja a co-owner to be added to the list
    */
List.prototype.addUser = function(ninja)
{
	this.users.push(ninja);
}

/**Removes a Ninja from the list of responcible owners
	*@param ninja a co-owner to be added to the list
    */
List.prototype.removeUser = function(ninja)
{
	// Find and remove item from an array
	var i = this.users.indexOf(ninja);
	if(i != -1) {
	this.users.splice(i, 1);
	}

/**Adds a item to the list 
	*@param item a item to be added to the list
    */
List.prototype.addItem = function(item)
{
	this.items.push(item);
}

/**Removes a item from the list 
	*@param item to be removed to the list
    */
List.prototype.removeItem = function(item)
{
	// Find and remove item from an array
	var i = this.items.indexOf(item);
	if(i != -1) {
	this.items.splice(i, 1);
	}
}