if (process.env.NODE_ENV == 'production') {
    exports = {};
}
else {
    var should = require('should');
    
    var validateTextile = function(data) {
        data.should.not.equal(null);
        data.should.instanceof(Object);

        data.should.have.property('code');
        data.code.should.instanceof(String);

        data.should.have.property('description');
        data.description.should.instanceof(String);
    };
    exports.product={
        textile:validateTextile
    }
}