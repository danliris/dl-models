//exports.core = {
   // Product : require('./src/core/product'),
   // Buyer : require('./src/core/buyer'),
    //Supplier : require('./src/core/supplier')
//};
module.exports = {
    core: {
        Product : require('./src/core/product'),
        Buyer : require('./src/core/buyer'),
        Supplier : require('./src/core/supplier'),
        Accessories : require('./src/core/accessories')
    },
    map: require("./src/map"),
    validator: require("./test/validator")
}