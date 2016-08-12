'use strict'
var BaseModel = require('capital-models').BaseModel;

module.exports = class POGarmentSparepart extends BaseModel {
    constructor(source) {
        super('POGarmentSparepart', '1.0.0');

        //Define properties
        this.PRNo = '';
        this.PONo = '';
        // this.supplierId = {};
        this.supplier = new Supplier();
        this.ppn = 10;
        // this.itemId = {};
        this.items = new SparepartValue();
        this.deliveryDate = new Date();
        this.termOfPayment = '';
        this.deliveryFeeByBuyer = false;
        this.PODLNo = '';
        this.description = '';
        this.copy(source);

    }
}