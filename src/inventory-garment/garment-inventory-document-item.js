'use strict';

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class GarmentInventoryDocumentItem extends BaseModel {
    constructor(source) {
        super('garment-inventory-document-item', '1.0.0');
        // Define properties. 
        this.productId = {};
        this.productCode = "";
        this.productName = "";
        this.quantity = 0; 
        this.uomId = {};
        this.uom = "";  
        this.remark = '';
        this.copy(source);
    }
};
