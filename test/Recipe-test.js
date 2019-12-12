const chai = require("chai");
const expect = chai.expect;

const Recipe = require('../src/Recipe');
const recipeData = require('../data/recipes');

describe('Recipe', () => {
  let recipe1;
  beforeEach(() => {
    recipe1 = new Recipe(recipeData[0]);
  })

  it('should be a specific instance of Recipe', () => {
    expect(recipe1).to.be.an.instanceof(Recipe);
  })

  it('should have an ingredients stored as a property', () => {
    expect(recipe1.ingredients).to.deep.equal(recipeData[0].ingredients);
  })

  it('should have an instructions stored as a property', () => {
    expect(recipe1.instructions).to.deep.equal(recipeData[0].instructions);
  })

  it('should be able to store tag as a property', () => {
    expect(recipe1.tags).to.deep.equal(recipeData[0].tags);
  })

  it('should store name as a property', () => {
    expect(recipe1.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
  })

  it('should be able to toggle favorited value', () => {
    expect(recipe1.isFavorited).to.equal(false);
    recipe1.toggleFavorite();
    expect(recipe1.isFavorited).to.equal(true);
  })

  it('should be able to toggle cooking status', () => {
    expect(recipe1.willCook).to.equal(false);
    recipe1.toggleCook();
    expect(recipe1.willCook).to.equal(true);
  })
})
