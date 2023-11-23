// 5-payment.test.js
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    let consoleLogSpy;

    beforeEach(function () {
        // Create a spy for console.log before each test
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        // Restore the spy after each test
        consoleLogSpy.restore();
    });

    it('should log the correct message for totalAmount = 100 and totalShipping = 20', function () {
        // Call the function
        sendPaymentRequestToApi(100, 20);

        // Verify that console.log is called with the correct message
        expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;

        // Verify that console.log is only called once
        expect(consoleLogSpy.calledOnce).to.be.true;
    });

    it('should log the correct message for totalAmount = 10 and totalShipping = 10', function () {
        // Call the function
        sendPaymentRequestToApi(10, 10);

        // Verify that console.log is called with the correct message
        expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;

        // Verify that console.log is only called once
        expect(consoleLogSpy.calledOnce).to.be.true;
    });
});
