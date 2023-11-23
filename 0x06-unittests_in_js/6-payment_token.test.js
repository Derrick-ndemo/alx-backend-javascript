// 6-payment_token.test.js
const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
    it('should return a resolved promise with a success response when success is true', function (done) {
        // Call the function with success = true
        getPaymentTokenFromAPI(true)
        .then((result) => {
            // Verify that the result is as expected
            expect(result).to.deep.equal({ data: 'Successful response from the API' });

            // Signal that the test is done
            done();
        })
        .catch((error) => {
            // Signal that the test has failed
            done(error);
        });
    });

    it('should return a resolved promise with no response when success is false', function (done) {
        // Call the function with success = false
        getPaymentTokenFromAPI(false)
        .then((result) => {
            // Verify that the result is undefined (no response)
            expect(result).to.be.undefined;

            // Signal that the test is done
            done();
        })
        .catch((error) => {
            // Signal that the test has failed
            done(error);
        });
    });
});
