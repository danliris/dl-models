'use strict';
var BaseModel = require('model-toolkit').BaseModel;

module.exports = class WeeklyPlanItem extends BaseModel {
    constructor(source, type) {
        super(type || 'weekly-plan-item', '1.0.0');

        this.weekNumber = 0;
        this.startDate = new Date();
        this.endDate = new Date();
        this.month = 0;
        this.efficiency = 0;
        this.spindle = 0;
        this.workingCapacities = 0;
        this.acTotal = 0;
        this.ecTotal = 0;
        this.usedEC = 0;
        this.remainingEC = 0;
        this.copy(source);
    }
};