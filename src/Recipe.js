const ingredientData = require('../data/ingredients');


class Recipe {
  constructor(recipe) {
    this.name = recipe.name;
    this.id = recipe.id;
    this.tag = recipe.tag;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
  };

  calculateCost() {
    return this.ingredients.reduce((acc, recipeIngredient) => {
        ingredientData.forEach((ingredient) => {
          if (ingredient.id === recipeIngredient.id) {
            console.log(ingredient.name);
            acc += ingredient.estimatedCostInCents;
          }
        })
      return acc;
    }, 0) / 100;
  };

  displayInstructions() {

}


if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
