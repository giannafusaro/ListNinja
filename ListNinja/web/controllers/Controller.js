/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Controller = function(model) {
    this.listCon = new ListController(model.getListsModel());
    this.ninjaCon = new NinjaController(model.getNinjasModel());
};

Controller.prototype.getListCon = function() {
    return this.listCon;
};

Controller.prototype.getNinjaCon = function() {
    return this.ninjaCon;
};