var validate = require('../src/validator').spMasterPlan;

it("#01. weekly-plan should valid", function () {
    var WeeklyPlan = require('../src/sp-master-plan/weekly-plan');
    validate.weeklyPlan(new WeeklyPlan());
});

it("#02. Working Capacities Standard should valid", function () {
    var WorkingCapacitiesStandard = require('../src/sp-master-plan/working-capacities-standard');
    validate.workingCapacitiesStandard(new WorkingCapacitiesStandard());
});

it("#03. Style should valid", function () {
    var Style = require('../src/sp-master-plan/style');
    validate.style(new Style());
});

it("#04. Standard Capacity should valid", function () {
    var StandardCapacity = require('../src/sp-master-plan/standard-capacity');
    validate.standardCapacity(new StandardCapacity());
});

it("#05. Booking Order should valid", function () {
    var BookingOrder = require('../src/sp-master-plan/booking-order');
    validate.bookingOrder(new BookingOrder());
});

it("#06. Master Plan Comodity should valid", function () {
    var MasterPlanComodity = require('../src/sp-master-plan/master-plan-comodity');
    validate.masterPlanComodity(new MasterPlanComodity());
});

it("#07. Sewing Blocking Plan should valid", function () {
    var SewingBlockingPlan = require('../src/sp-master-plan/sewing-blocking-plan');
    validate.sewingBlockingPlan(new SewingBlockingPlan());
});

it("#08. Garment Section should valid", function () {
    var GarmentSection = require('../src/sp-master-plan/sp-section');
    validate.spSection(new GarmentSection());
});