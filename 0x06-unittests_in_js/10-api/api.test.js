// api.test.js
const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', function () {
    let server;

    before(function (done) {
        // Start the server before the tests
        server = app.listen(7865, function () {
        done();
        });
    });

    after(function (done) {
        // Close the server after the tests
        server.close(function () {
        done();
        });
    });

    it('should return correct status code', function (done) {
        request.get('http://localhost:7865/', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
        });
    });

    it('should return correct result', function (done) {
        request.get('http://localhost:7865/', function (error, response, body) {
        expect(body).to.equal('Welcome to the payment system');
        done();
        });
    });

    // Add more tests as needed

    });

    describe('/available_payments endpoint', function () {
    let server;

    before(function (done) {
        // Start the server before the tests
        server = app.listen(7865, function () {
        done();
        });
    });

    after(function (done) {
        // Close the server after the tests
        server.close(function () {
        done();
        });
    });

    it('should return correct status code', function (done) {
        request.get('http://localhost:7865/available_payments', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
        });
    });

    it('should return correct result', function (done) {
        request.get('http://localhost:7865/available_payments', function (error, response, body) {
        const expectedResponse = {
            payment_methods: {
            credit_cards: true,
            paypal: false
            }
        };
        const parsedBody = JSON.parse(body);
        expect(parsedBody).to.deep.equal(expectedResponse);
        done();
        });
    });

    });

    describe('/login endpoint', function () {
    let server;

    before(function (done) {
        // Start the server before the tests
        server = app.listen(7865, function () {
        done();
        });
    });

    after(function (done) {
        // Close the server after the tests
        server.close(function () {
        done();
        });
    });

    it('should return correct status code', function (done) {
        request.post('http://localhost:7865/login', { json: { userName: 'Betty' } }, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
        });
    });

    it('should return correct result', function (done) {
        request.post('http://localhost:7865/login', { json: { userName: 'Betty' } }, function (error, response, body) {
        expect(body).to.equal('Welcome Betty');
        done();
        });
    });
});
