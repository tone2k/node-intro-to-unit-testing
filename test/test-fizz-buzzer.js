// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function () {

    // test the normal case
    it('should return fizz-buzz if mutliple by 15', function () {
        [15, 30, 45].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('fizz-buzz');
        });
    });
    it('should return buzz if mutliple by 5', function () {
        [5, 10, 20].forEach(function (input) {
            expect(fizzBuzzer(input)).to.equal('buzz');
        });
    });
    it('should return fizz if mutliple by 3', function () {
        [3, 6, 9].forEach(function (input) {
            expect(fizzBuzzer(input)).to.equal('fizz');
        });
    });

    it('should error if not multiple', function () {
       [1, 2, 4, 7].forEach(function(input) {
           expect(fizzBuzzer(input)).to.equal(input);
       })
    });
    it('should error if not number', function() {
        const incorrectInput = [true, false, 'string'];
        incorrectInput.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });
});