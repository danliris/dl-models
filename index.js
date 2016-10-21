module.exports = {
    auth: {
        Account: require('./src/auth/account'),
        Profile: require('./src/auth/profile'),
        Role: require('./src/auth/role')
    },
    master: {
        Product: require('./src/master/product'),
        Buyer: require('./src/master/buyer'),
        Supplier: require('./src/master/supplier'),
        Uom: require('./src/master/uom'),
        Unit: require('./src/master/unit'),
        Category: require('./src/master/category'),
        Currency: require('./src/master/currency'),
        Vat: require('./src/master/vat'),
        Budget:require('./src/master/budget')
    },
    purchasing: {
        PurchaseOrderItem: require('./src/purchasing/purchase-order-item'),
        PurchaseOrder: require('./src/purchasing/purchase-order'),
        PurchaseOrderExternal: require('./src/purchasing/purchase-order-external'),
        QualityStandard: require('./src/purchasing/quality-standard'),
        DeliveryOrder: require('./src/purchasing/delivery-order'),
        DeliveryOrderItem: require('./src/purchasing/delivery-order-item'),
        DeliveryOrderItemFulfillment: require('./src/purchasing/delivery-order-item-fulfillment'),
        UnitReceiptNote: require('./src/purchasing/unit-receipt-note'),
        PurchaseRequestItem: require('./src/purchasing/purchase-request-item'),
        PurchaseRequest: require('./src/purchasing/purchase-request'),
        UnitReceiptNoteItem: require('./src/purchasing/unit-receipt-note-item'), 
        UnitPaymentPriceCorrectionNote: require('./src/purchasing/unit-payment-price-correction-note'),
        UnitPaymentPriceCorrectionNoteItem: require('./src/purchasing/unit-payment-price-correction-note-item'), 
        UnitPaymentOrder: require('./src/purchasing/unit-payment-order'),
        UnitPaymentOrderItem: require('./src/purchasing/unit-payment-order-item')
    },
    map: require('./src/map'),
    validator: require('./src/validator')
}
