const chai = require('chai');
const expect = chai.expect;

const Cookbook = require('../src/Cookbook');
const recipeData = require('../data/recipes');

describe('Cookbook', () => {
  let cookbook;

  beforeEach(() => {
    cookbook = new Cookbook(recipeData);
  });

  it('should be a function', () => {
    expect(Cookbook).to.be.a('function');
  });

  it('should be an instance of Pantry', () => {
    expect(cookbook).to.be.an.instanceof(Cookbook);
  });

  it('should store all recipes', () => {
    recipeData.forEach(recipe => {
      cookbook.cookbook.push(recipe);
    })
    expect(cookbook.cookbook).to.deep.equal(recipeData);
  });

  it('should be able to find a recipe', () => {
    recipeData.forEach(recipe => {
      cookbook.cookbook.push(recipe);
    })
    expect(cookbook.findRecipe('678353')).to.deep.equal(recipeData[1]);
  })
});