require("should");
var validatorItems = require('./booking-order-item-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.be.String();
    
    data.should.have.property('bookingDate');
    data.bookingDate.should.instanceof(Date);
    
    data.should.have.property('deliveryDate');
    data.deliveryDate.should.instanceof(Date);
    
    data.should.have.property('spBuyerId');
    data.spBuyerId.should.instanceOf(Object);
    
    data.should.have.property('spBuyerName');
    data.spBuyerName.should.be.String();
    
    data.should.have.property('spBuyerCode');
    data.spBuyerCode.should.be.String();

    data.should.have.property('spSectionId');
    data.spSectionId.should.instanceOf(Object);
    
    data.should.have.property('spSectionName');
    data.spSectionName.should.be.String();
    
    data.should.have.property('spSectionCode');
    data.spSectionCode.should.be.String();

    data.should.have.property('remark');
    data.remark.should.be.String();

    data.should.have.property('isMasterPlan');
    data.isMasterPlan.should.instanceOf(Boolean);

    data.should.have.property('isCanceled');
    data.isCanceled.should.instanceOf(Boolean);

    //data.should.have.property('items');
    if(data.items){
        data.items.should.instanceOf(Array);

        for (var item of data.items) {
            validatorItems(item);
        }
    }
    if(data.canceledItems){
        data.canceledItems.should.instanceOf(Array);

        for (var canceledItem of data.canceledItems) {
            validatorItems(canceledItem);
        }
    }
};