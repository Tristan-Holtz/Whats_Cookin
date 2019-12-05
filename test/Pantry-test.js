const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/Pantry');
const Recipe = require('../src/Recipe');
const userData = require('../data/users');
const recipeData = require('../data/recipes');

describe('Pantry', () => {
  let pantry;

  beforeEach(() => {
    pantry = new Pantry(userData[0].id, userData[0].pantry);
  });

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  });

  it('should be an instance of Pantry', () => {
    expect(pantry).to.be.an.instanceof(Pantry);
  });

  it('should store the associated user ID', () => {
    expect(pantry.id).to.equal(1);
  });

  it('should hold user pantry ingredients', () => {
    expect(pantry.pantry).to.deep.equal(userData[0].pantry);
  });

  // it('should check if user has ingredients to cook meal', () => {
  //   expect(pantry.pantry).to.deep.equal(userData[0].pantry);
  // });

  it('should return ingredients they need if they do not have all the necessary ingredients', () => {
    const recipe = new Recipe(recipeData[0]);
    expect(pantry.checkPantry(recipe)).to.deep.equal(userData[0].pantry);
  });
});