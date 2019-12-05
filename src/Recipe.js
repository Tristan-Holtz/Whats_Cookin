const ingredientData = require('../data/ingredients');


class Recipe {
  constructor(recipe) {
    this.name = recipe.name;
    this.id = recipe.id;
    this.tag = recipe.tag;
    this.image = recipe.image;
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
    return this.instructions.reduce((acc, instruction) => {
      acc[instruction.number] = instruction.instruction;
        return acc;
      }, {})
    };
  }

  displayRecipePage() {
    return `
      
    `;
  }

  displayRecipeCard(recipe) {
    return `
      <article class='recipe__article'>
        <img class='article__img' src='${recipe.image}'>
        <h1 class='article__h1'>${recipe.name}</h1>
        <div class='article__div'>
          <button class='article__btn article__btn--favorite'>Favorite</button>
          <button class='article__btn article__btn--to-cook'>To Cook</button>
        </div>
      </article>
      `;
  }


if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
