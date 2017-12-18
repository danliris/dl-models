'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Uom = require("../master/uom");

module.exports = class InventorySummary extends BaseModel {
    constructor(source) {
        super('inventory-summary', '1.0.0');

        // Define properties.
        this.productId = {};
        this.productCode = "";
        this.productName = "";

        this.storageId = {};
        this.storageCode = "";
        this.storageName = "";

        this.quantity = 0;
        // this.secondQuantity = 0;
        // this.thirdQuantity = 0;
        this.uomId = {};
        // this.secondUomId = {};
        // this.thirdUomId = {};
        this.uom = "";
        // this.secondUom = "";
        // this.thirdUom = "";

        this.copy(source);
    }
};
