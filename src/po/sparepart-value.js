'use strict'
var BaseModel = require('capital-models').BaseModel;

module.exports = class SparepartValue extends BaseModel {
    constructor(source) {
        super('SparepartValue', '1.0.0');
        this.qty = 0;
        this.unit = '';
        this.price = 0;
        this.sparepart = [];

        this.copy(source);

        // this.sparepartId = {};
        var _sparepart = [];
        for (var item of this._sparepart) {
            _sparepart.push(new Sparepart(item));
        }
        this.sparepart = _sparepart;
    }

}