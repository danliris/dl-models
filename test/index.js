var test = function(name, path) {
    describe(name, function() {
        require(path);
    })
}

test('@auth', './auth-test');
test('@master', './master-test');
test('@inventory', './inventory-test');
test('@purchasing', './purchasing-test');
test('@garment-purchasing', './garment-purchasing-test');
test('@production', './production-test');
test('@sales', './sales-test');
test('@garmentInventory', './garment-inventory-test');
test('@inventory-textile', './inventory-textile-test');
