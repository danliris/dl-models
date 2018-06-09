require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('weekNumber');
    data.weekNumber.should.be.instanceOf(Number);

    data.should.have.property('startDate');
    data.startDate.should.instanceof(Date);

    data.should.have.property('endDate');
    data.endDate.should.instanceof(Date);

    data.should.have.property('month');
    data.month.should.be.instanceOf(Number);

    data.should.have.property('efficiency');
    data.efficiency.should.be.instanceOf(Number);

    data.should.have.property('spindle');
    data.operator.should.be.instanceOf(Number);

    data.should.have.property('workingCapacities');
    data.workingCapacities.should.be.instanceOf(Number);

    data.should.have.property('acTotal');
    data.ahTotal.should.be.instanceOf(Number);

    data.should.have.property('ecTotal');
    data.ehTotal.should.be.instanceOf(Number);

    data.should.have.property('usedEC');
    data.usedEH.should.be.instanceOf(Number);

    data.should.have.property('remainingEC');
    data.remainingEH.should.be.instanceOf(Number);

};