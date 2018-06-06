var validate = require('../src/validator').spMasterPlan;

it("#01. weekly-plan should valid", function () {
    var WeeklyPlan = require('../src/sp-master-plan/weekly-plan');
    validate.weeklyPlan(new WeeklyPlan());
});

it("#02. Working Hours Standard should valid", function () {
    var WorkingHoursStandard = require('../src/sp-master-plan/working-hours-standard');
    validate.workingHoursStandard(new WorkingHoursStandard());
});

it("#03. Style should valid", function () {
    var Style = require('../src/sp-master-plan/style');
    validate.style(new Style());
});

it("#04. Standard Hour should valid", function () {
    var StandardHour = require('../src/sp-master-plan/standard-hour');
    validate.standardHour(new StandardHour());
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

it("#08. Sp Section should valid", function () {
    var SpSection = require('../src/sp-master-plan/sp-section');
    validate.spSection(new SpSection());
});