'use strict'

var BaseModel = require("capital-models").BaseModel;
<<<<<<< HEAD
var UoM = require("./UoM-docs").UoM;

module.exports = class Sparepart extends BaseModel {
    constructor(source) {
        super('sparepart', '1.0.0'); 
=======
var UoM = require("./UoM").UoM;

module.exports = class Sparepart extends BaseModel {
    constructor(source) {
        super('sparepart', '1.0.0');
>>>>>>> 9b2204afe7dd0ee701ac5d27950175fefba20662

        this.code = '';
        this.name = '';
        this.description = '';
        this.UoM = new UoM();

        this.copy(source);
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 9b2204afe7dd0ee701ac5d27950175fefba20662
