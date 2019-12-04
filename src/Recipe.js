class Recipe {
  constructor(recipe) {
    this.name = recipe.name;
    this.id = recipe.id
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
  };

  calculateCost() {
    return 'something';
  };

  displayInstructions() {
    return this.instructions;
  };
}


module.exports = Recipe;
