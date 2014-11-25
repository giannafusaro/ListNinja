/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Model = function(view) {
    this.lists = new Lists(view);
    this.ninjas = new Ninjas(view);
};

Model.prototype.getListsModel = function() {
    return this.lists;
};

Model.prototype.getNinjasModel = function() {
    return this.ninjas;
};