/**
 * test the 0-calcul.js module
 */


const calculateNumber = require('./1-calcul.js');
const expect = require('chai').expect;


describe('calculateNumber', function () {
    describe('Using SUM, SUBTRACT, AND DIVIDE', function () {
        it('should return the sum of rounded numbers when type is SUM', function () {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });

        it('should return the difference of rounded numbers when type is SUBTRACT', function () {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });

        it('should return the quotient of rounded numbers when type is DIVIDE', function () {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('should return "Error" when attempting to divide by 0', function () {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });

        it('should throw an error for an invalid type', function () {
            expect(() => calculateNumber('INVALID_TYPE', 1.4, 4.5)).to.throw(Error);
        });
    });
});