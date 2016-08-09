var validate = require('./validator').product;

it("#01. Textile should valid", function(){
    var Textile = require('../src/master/product/textile');
    validate.textile(new Textile());
}) 