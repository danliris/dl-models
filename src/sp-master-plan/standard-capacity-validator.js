require("should");
var validateStyle = require('./style-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);
    
    data.should.have.property('date');
    data.date.should.instanceof(Date);

    // data.should.have.property('styleId');
    // data.styleId.should.instanceOf(Object);

    // data.should.have.property('style');
    // data.style.should.instanceOf(Object);
    // validateStyle(data.style);

    data.should.have.property('spBuyerId');
    data.spBuyerId.should.instanceOf(Object);
    
    data.should.have.property('spBuyerName');
    data.spBuyerName.should.be.String();
    
    data.should.have.property('spBuyerCode');
    data.spBuyerCode.should.be.String();

    data.should.have.property('masterplanComodityId');
    data.spBuyerId.should.instanceOf(Object);
    
    data.should.have.property('masterplanComodityName');
    data.spBuyerName.should.be.String();
    
    data.should.have.property('masterplanComodityCode');
    data.spBuyerCode.should.be.String();
        
    data.should.have.property('shSewing');
    data.shSewing.should.instanceOf(Number);
    
};