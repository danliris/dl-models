'use strict';
var BaseModel = require('model-toolkit').BaseModel;


module.exports = class SpSection extends BaseModel {
    constructor(source, type) {
        super(type || 'sp-section', '1.0.0');
        this.code = '';
        this.name = '';
        this.remark = '';
        
        this.copy(source);
    }
};