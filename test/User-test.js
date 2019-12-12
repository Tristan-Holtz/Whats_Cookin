const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const Recipe = require('../src/Recipe');
const recipeData = require('../data/recipes');
const usersData = require('../data/users');

describe('User', () => {
  let user;

  beforeEach(() => {
    recipe1 = new Recipe(recipeData[0]);
    recipe2 = new Recipe(recipeData[1]);
    recipe3 = new Recipe(recipeData[2]);
    user = new User(usersData[0]);
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  });

  it('should start with the passed in ID', () => {
    expect(user.id).to.equal(1);
  });

  it('should start with the name passed in', () => {
    expect(user.name).to.equal("Big Daddy Zuck");
  });

  describe('Recipe Storage', () => {
    it('should start with an empty favorite recipe array', () => {
      expect(user.favoriteRecipes).to.deep.equal([]);
    });

    it('should start with an empty recipe to cook array', () => {
      expect(user.recipesToCook).to.deep.equal([]);
    });

    it('should be able to store favorite', () => {
      user.storeRecipe('favoriteRecipes', recipe1);
      expect(user.favoriteRecipes).to.deep.equal([recipeData[0]]);
    });

    it('should be able to add recipes to cook', () => {
      user.storeRecipe('recipesToCook', recipe1);
      expect(user.recipesToCook).to.deep.equal([recipeData[0]]);
    });

    it('should be able to store multipe favorites', () => {
      user.storeRecipe('favoriteRecipes', recipe1);
      user.storeRecipe('favoriteRecipes', recipe2);
      expect(user.favoriteRecipes).to.deep.equal([recipeData[0], recipeData[1]]);
    });

    it('should be able to add multipe recipes to cook', () => {
      user.storeRecipe('recipesToCook', recipe1);
      user.storeRecipe('recipesToCook', recipe2);
      expect(user.recipesToCook).to.deep.equal([recipeData[0], recipeData[1]]);
    });

    it('should only be able to store a favorite once', () => {
      user.storeRecipe('favoriteRecipes', recipe1);
      user.storeRecipe('favoriteRecipes', recipe1);
      expect(user.favoriteRecipes).to.deep.equal([recipeData[0]]);
    });

    it('should only be able to store a recipe to cook once', () => {
      user.storeRecipe('recipesToCook', recipe1);
      user.storeRecipe('recipesToCook', recipe1);
      expect(user.recipesToCook).to.deep.equal([recipeData[0]]);
    });
  });
  describe('Recipe Filter', () => {
    it('should be able to filter based on tag', () => {
      user.storeRecipe('favoriteRecipes', recipe1);
      user.storeRecipe('favoriteRecipes', recipe2);
      user.storeRecipe('favoriteRecipes', recipe3);
      expect(user.filterRecipe('favoriteRecipes', 'sauce')).to.deep.equal([recipeData[2]]);
    });

    it('should be able to search by keyword', () => {
      user.storeRecipe('favoriteRecipes', recipe1);
      user.storeRecipe('favoriteRecipes', recipe2);
      user.storeRecipe('favoriteRecipes', recipe3);
      expect(user.searchRecipe('favoriteRecipes', 'pork')).to.deep.equal([recipeData[1]]);
    });
  });

  describe('Recipe Removal', () => {
    it('should be able to remove a recipe from favorites', () => {
      user.storeRecipe('favoriteRecipes', recipe2);
      expect(user.searchRecipe('favoriteRecipes', 'pork')).to.deep.equal([recipeData[1]]);
      user.removeRecipe('favoriteRecipes', recipe2);
      expect(user.favoriteRecipes).to.deep.equal([]);
    });

    it('should be able to remove a recipe from to cook', () => {
      user.storeRecipe('recipesToCook', recipe2);
      expect(user.recipesToCook).to.deep.equal([[recipeData[1]]]);
      user.removeRecipe('recipesToCook', recipe2);
      expect(user.recipesToCook).to.deep.equal([]);
    });
  });
});
