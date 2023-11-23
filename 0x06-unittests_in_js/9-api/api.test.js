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

    describe('Cart page', function () {
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

    it('should return correct status code when :id is a number', function (done) {
        request.get('http://localhost:7865/cart/12', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
        });
    });

    it('should return correct result when :id is a number', function (done) {
        request.get('http://localhost:7865/cart/12', function (error, response, body) {
        expect(body).to.equal('Payment methods for cart 12');
        done();
        });
    });

    it('should return correct status code when :id is NOT a number (=> 404)', function (done) {
        request.get('http://localhost:7865/cart/hello', function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
        });
    });

});
