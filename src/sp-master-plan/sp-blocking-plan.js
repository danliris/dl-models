'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var SpBlockingPlanDetail = require('./sp-blocking-plan-detail');

module.exports = class SpBlockingPlan extends BaseModel {
    constructor(source, type) {
        super(type || 'sp-blocking-plan', '1.0.0');
        this.code = '';
        this.bookingOrderNo='';
        this.bookingOrderId={};
        this.spBuyerId={};
        this.spBuyerName='';
        this.spBuyerCode='';
        this.quantity=0;
        this.bookingDate=new Date();
        this.deliveryDate=new Date();
        this.remark='';
        this.bookingItems=[];
        this.details=[];
        this.status='';

        this.copy(source);

        this.details = (this.details || []).map(detail => new SpBlockingPlanDetail(detail));
    }
};