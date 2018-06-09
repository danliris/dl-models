'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var SpinningPlanDetail = require('./spinning-plan-detail');

module.exports = class SpinningPlan extends BaseModel {
    constructor(source, type) {
        super(type || 'spinning-plan', '1.0.0');
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

        this.details = (this.details || []).map(detail => new SpinningPlanDetail(detail));
    }
};