/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var NinjaController = function(ninjas) {
    this.ninjas = ninjas;
    populateUsers([4321,1234]);
};

var populateUsers = function(fbidArray) {
    var ral = new RemoteAccessLayer();
    for (var i = 0; i < fbidArray.length; i++) {
        ral.getUser(fbidArray[i], this.ninjas, function(data, ninjas) {
            var ninja = new Ninja(data.fbid, "fName", "lName", "picurl", data.lastlogin, data.created);
            ninjas.addNinja(ninja);
        });
    }
};