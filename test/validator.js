if (process.env.NODE_ENV == 'production'){
    exports = {};
}
else{
     var should = require('should');

     var validateAccessories = function (data){
         data.should.not.equal(null);
         data.should.instanceOf(Object);

         data.should.have.property('code');
         data.code.should.be.String();

         data.should.have.property('name');
         data.name.should.be.String();

         data.should.have.property('description');
         data.description.should.be.String();
     }

     exports.core = {
        accessories : validateAccessories
     }
}