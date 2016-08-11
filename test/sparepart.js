var validate = require('./validator').core;

<<<<<<< HEAD
it("#04. Sparepart should valid", function(){
    var Sparepart = require('../src/core/sparepart');
    var UoM_Template = require('../src/core/UoM-docs').UoM_Template;
    var UoM = require('../src/core/UoM-docs').UoM;
=======
it("#04. Sparepart should valid", function () {
    var Sparepart = require('../src/core/sparepart');
    var UoM_Template = require('../src/core/UoM').UoM_Template;
    var UoM = require('../src/core/UoM').UoM;
>>>>>>> 9b2204afe7dd0ee701ac5d27950175fefba20662

    var sparepart = new Sparepart();
    var template = new UoM_Template({
        mainUnit: 'M',
        mainValue: 1,
        convertedUnit: 'M',
<<<<<<< HEAD
        convertedValue: 1 
=======
        convertedValue: 1
>>>>>>> 9b2204afe7dd0ee701ac5d27950175fefba20662
    });

    var _units = [];
    _units.push(template);
<<<<<<< HEAD
=======

>>>>>>> 9b2204afe7dd0ee701ac5d27950175fefba20662
    var uom = new UoM({
        category: 'UoM-Unit-Test',
        default: template,
        units: _units
    });

    sparepart.UoM = uom;
    validate.sparepart(sparepart);
<<<<<<< HEAD
}) 
=======
}) 
>>>>>>> 9b2204afe7dd0ee701ac5d27950175fefba20662
