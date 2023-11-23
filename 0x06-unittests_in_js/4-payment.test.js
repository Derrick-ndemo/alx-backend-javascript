// 4-payment.test.js
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    it('should use a stub for Utils.calculateNumber and log the correct message', function () {
        // Stub Utils.calculateNumber to always return 10
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

        // Create a spy for console.log
        const consoleLogSpy = sinon.spy(console, 'log');

        // Call the function
        sendPaymentRequestToApi(100, 20);

        // Verify that the stub is called with the expected arguments
        expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;

        // Verify that console.log is called with the correct message
        expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;

        // Restore the stub and the spy
        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });
});
