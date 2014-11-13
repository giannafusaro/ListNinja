/*
 * Ninja
 * user data model
 *@author Buser
 */


/**Constructs a Ninja  with an first name, last name and email.
	*@param fName the users first name 
	*@param lName the users last name
	*@param email the users email address
    */
 var Ninja = function(userid, fbid,fName, lName, email,lastlogin,created)
 {
 	this.userid = userid;
 	this.fbid = fbid;
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.lastlogin = lastlogin;
    this.created = created;
 }

