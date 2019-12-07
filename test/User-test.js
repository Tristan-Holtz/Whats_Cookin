const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const Recipe = require('../src/Recipe');
const recipeData = require('../data/recipes');

describe('User', () => {
  let user;

  beforeEach(() => {
    // user = new User(userData[0].id,userData[0].name);
    recipe1 = new Recipe(recipeData[0]);
    recipe2 = new Recipe(recipeData[1]);
    user = new User(1, "Carole Fay");
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(user).to.be.an.instanceof(User);
  });

  it('should start with the passed in ID', () => {
    expect(user.id).to.equal(1);
  });

  it('should start with the name passed in', () => {
    expect(user.name).to.equal("Carole Fay");
  });

  describe('Recipe Storage', () => {
    it('should start with an empty favorite recipe array', () => {
      expect(user.favoriteRecipes).to.deep.equal([]);
    });
  
    it('should start with an empty recipe to cook array', () => {
      expect(user.recipesToCook).to.deep.equal([]);
    });
  
    it('should be able to store favorite', () => {
      user.storeRecipe('favorite', recipe1);
      expect(user.favoriteRecipes).to.deep.equal([recipeData[0]]);
    });
  
    it('should be able to add recipes to cook', () => {
      user.storeRecipe('cook', recipe1);
      expect(user.recipesToCook).to.deep.equal([recipeData[0]]);
    });

    it('should be able to store multipe favorites', () => {
      user.storeRecipe('favorite', recipe1);
      user.storeRecipe('favorite', recipe2);
      expect(user.favoriteRecipes).to.deep.equal([recipeData[0], recipeData[1]]);
    });

    it('should be able to add multipe recipes to cook', () => {
      user.storeRecipe('cook', recipe1);
      user.storeRecipe('cook', recipe2);
      expect(user.recipesToCook).to.deep.equal([recipeData[0], recipeData[1]]);
    });
  
    it('should only be able to store a favorite once', () => {
      user.storeRecipe('favorite', recipe1);
      user.storeRecipe('favorite', recipe1);
      expect(user.favoriteRecipes).to.deep.equal([recipeData[0]]);
    });
  
    it('should only be able to store a recipe to cook once', () => {
      user.storeRecipe('cook', recipe1);
      user.storeRecipe('cook', recipe1);
      expect(user.recipesToCook).to.deep.equal([recipeData[0]]);
    });
  });
});