const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/Pantry');

describe('Pantry', () => {
    let pantry;

    beforeEach(() => {
        // user = new User(userData[0].id,userData[0].name);
        pantry = new Pantry(1, "Carole Fay");
    });

    it('should be a function', () => {
        expect(Pantry).to.be.a('function');
    });

    it('should be an instance of Pantry', () => {
        expect(pantry).to.be.an.instanceof(Pantry);
    });
});