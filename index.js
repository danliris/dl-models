exports = {
    core:{
    Product : require('./src/core/product'),
    Buyer : require('./src/core/buyer'),
    Supplier : require('./src/core/supplier')
    },
    master:{
        product:{
            Textile:require('./src/master/product/textile')
        }
    },
    validator: require("./test/validator")
};