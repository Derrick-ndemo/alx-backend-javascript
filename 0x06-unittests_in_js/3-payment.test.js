/**
 * testing 3-payement.js
 */

const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    it('should use Utils.calculateNumber with type SUM', function () {
        // Create a spy for Utils.calculateNumber
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        // Call the function
        sendPaymentRequestToApi(100, 20);

        // Assert that the spy was called with the expected arguments
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

        // Restore the spy
    calculateNumberSpy.restore();
    });

    it('should log the correct message', function () {
        // Stub console.log to capture the output
        const consoleLogStub = sinon.stub(console, 'log');

        // Call the function
        sendPaymentRequestToApi(100, 20);

        // Assert that console.log was called with the expected message
        expect(consoleLogStub.calledWith('The total is: 120')).to.be.true;

        // Restore the stub
        consoleLogStub.restore();
    });
});
