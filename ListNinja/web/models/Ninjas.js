/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Ninjas = function() {
    this.ninjas = [];
};

Ninjas.prototype.addNinja = function(ninja) {
    this.ninjas.push(ninja);
};

Ninjas.prototype.removeNinja = function(ninja) {
    var i = this.ninjas.indexOf(ninja);
    if(i !== -1) {
        this.ninjas.splice(i, 1);
    }
};

Ninjas.prototype.getNinjas = function() {
    return this.ninjas;
}

Ninjas.prototype.getNinja = function(fbid) {
    for (var i = 0; i < this.ninjas.length; i++) {
        var ninja = this.ninjas[i];
        if (ninja.fbid === fbid) {
            return ninja;
        }
    }
};