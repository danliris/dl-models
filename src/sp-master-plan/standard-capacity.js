'use strict';
var BaseModel = require('model-toolkit').BaseModel;
// var Style = require('./style');


module.exports = class StandardCapacity extends BaseModel {
    constructor(source, type) {
        super(type || 'standard-capacity', '1.0.0');
        this.code = '';
        this.date = new Date();
        // this.styleId = {};
        // this.style = new Style();
        this.spBuyerId={};
        this.spBuyerName='';
        this.spBuyerCode='';
        this.masterplanComodityId = {};
        this.masterplanComodityName='';
        this.masterplanComodityCode='';
        this.shSewing = 0;
        this.copy(source);
    }
};