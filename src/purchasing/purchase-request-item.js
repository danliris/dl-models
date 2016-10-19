'use strict'
var BaseModel = require('capital-models').BaseModel;
var Product = require('../master/product');
var uom = require('../master/uom');

module.exports = class PurchaseOrderItem extends BaseModel {
    constructor(source, type) {
        super(type || 'purchase-order-item', '1.0.0');

        this.product = new Product();
        this.quantity=0;
        this.uom=new uom();

        this.remark='';

        this.copy(source);
    }
}