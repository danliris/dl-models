'use strict'

var BaseModel = require("capital-models").BaseModel;
var UoM = require('./UoM-docs').UoM;

module.exports = class Textile extends BaseModel {
    constructor(source) {
        super('textile', '1.0.0'); // call MongoModel constructor

        // Define properties
        this.code = '';
        this.name = '';        
        this.description = '';
        this.UoM = new UoM();
        this.largeQuantity=0;
        this.largeUnit='';
        this.smallQuantity=0;
        this.smallUnit='';
        this.isDefault=true;
        
        this.copy(source);
    }
}