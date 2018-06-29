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

    data.should.have.property('buyerId');
    data.buyerId.should.instanceOf(Object);
    
    data.should.have.property('buyerName');
    data.buyerName.should.be.String();
    
    data.should.have.property('buyerCode');
    data.buyerCode.should.be.String();

    data.should.have.property('masterplanComodityId');
    data.buyerId.should.instanceOf(Object);
    
    data.should.have.property('masterplanComodityName');
    data.buyerName.should.be.String();
    
    data.should.have.property('masterplanComodityCode');
    data.buyerCode.should.be.String();
    
    // data.should.have.property('shCutting');
    // data.shCutting.should.instanceOf(Number);
    
    // data.should.have.property('shSewing');
    // data.shSewing.should.instanceOf(Number);
    
    data.should.have.property('scSpinning');
    data.scSpinning.should.instanceOf(Number);
};