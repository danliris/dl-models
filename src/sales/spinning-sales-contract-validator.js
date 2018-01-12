require("should");

var validateBuyer = require('../master/buyer-validator');
var validateUom = require('../master/uom-validator');
var validateAccount= require('../master/account-bank-validator');
var validateQuality = require('../master/quality-validator');
var validateComodity = require('../master/comodity-validator');
var validateTermOfPayment = require('../master/term-of-payment-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('salesContractNo');
    data.salesContractNo.should.be.String();

    // data.should.have.property('documentNumber');
    // data.documentNumber.should.be.String();

    data.should.have.property('buyerId');
    data.buyerId.should.instanceof(Object);

    data.should.have.property('buyer');
    data.buyer.should.instanceof(Object);
    validateBuyer(data.buyer);

    data.should.have.property('uomId');
    data.uomId.should.instanceof(Object);

    data.should.have.property('uom');
    data.uom.should.instanceof(Object);
    validateUom(data.uom);

    data.should.have.property('shippingQuantityTolerance');
    data.shippingQuantityTolerance.should.instanceOf(Number);

    data.should.have.property('price');
    data.price.should.instanceOf(Number);

    data.should.have.property('qualityId');
    data.qualityId.should.instanceof(Object);

    data.should.have.property('quality');
    data.quality.should.instanceof(Object);
    validateQuality(data.quality);

    data.should.have.property('comodityId');
    data.comodityId.should.instanceof(Object);

    data.should.have.property('comodity');
    data.comodity.should.instanceof(Object);
    validateComodity(data.comodity);

    data.should.have.property('termOfPaymentId');
    data.termOfPaymentId.should.instanceof(Object);

    data.should.have.property('termOfPayment');
    data.termOfPayment.should.instanceof(Object);
    validateTermOfPayment(data.termOfPayment);

    data.should.have.property('termOfShipment');
    data.termOfShipment.should.be.String();

    data.should.have.property('incomeTax');
    data.incomeTax.should.be.String();
    
    data.should.have.property('deliveredTo');
    data.deliveredTo.should.be.String();

    data.should.have.property('accountBankId');
    data.accountBankId.should.instanceof(Object);

    data.should.have.property('accountBank');
    data.accountBank.should.instanceof(Object);
    validateAccount(data.accountBank);

    data.should.have.property('condition');
    data.condition.should.be.String();

    data.should.have.property('deliverySchedule');
    data.deliverySchedule.should.instanceof(Date);

};