'use strict'
var BaseModel = require('capital-models').BaseModel;
var PurchaseRequestItem = require('./purchase-request-item');
var Budget= require('../master/budget');
var map = require('../map');

module.exports = class PurchaseRequest extends BaseModel {
    constructor(source, type) { 
        super(type || map.purchasing.type.PurchaseRequest, '1.0.0');

        this.no='';
        this.date = new Date();
        this.expectedDeliveryDate = new Date();
        this.budget = new Budget();

        this.unitId = {};
        this.unit = {};

        this.categoryId = {};
        this.category = {};

        this.isPosted = false;
        this.remark = '';

        this.items = [];
        this.copy(source);

        this.items = (this.items || []).map(item => new PurchaseRequestItem(item));
    }
}