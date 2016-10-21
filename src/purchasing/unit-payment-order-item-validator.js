require("should"); 
var validateUnitReceiptNote = require('./unit-receipt-note-validator');
var validateProduct = require('../master/product-validator');
var validateUom = require('../master/uom-validator');

module.exports = function (data) {    
    data.should.have.property('unitReceiptNoteId');
    data.unitReceiptNoteId.should.instanceof(Object);

    data.should.have.property('unitReceiptNote');
    data.unitReceiptNote.should.instanceof(Object);
    validateUnitReceiptNote(data.unit); 
   
}