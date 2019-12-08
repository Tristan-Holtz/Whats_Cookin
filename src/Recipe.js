const ingredientData = require('../data/ingredients');

class Recipe {
  constructor(recipe) {
    this.name = recipe.name;
    this.id = recipe.id;
    this.tags = recipe.tags;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
  }

  calculateCost() {
    return this.ingredients.reduce((acc, recipeIngredient) => {
      ingredientData.forEach((ingredient) => {
        if (ingredient.id === recipeIngredient.id) {
          acc += ingredient.estimatedCostInCents;
        }
      })
      return acc;
    }, 0) / 100;
  }

  displayInstructions() {
    return JSON.stringify(this.instructions.reduce((acc, instruction) => {
      acc[instruction.number] = instruction.instruction
      return acc;
    }, {}))
  }

  displayIngredients() {
    return JSON.stringify(this.ingredients.reduce((acc, ingredient) => {
      acc[ingredient.name] = ingredient.quantity.amount + ' ' + ingredient.quantity.unit; 
      return acc;
    }, {}))
  }

  displayRecipePage(recipe) {
    return `
    <section class='recipe'>
        <section class='recipe__img'></section>
        <div class='recipe--data'>
          <div class='recipe--name'>
            <h1>${recipe.name.toUpperCase()}</h1>
            <h2>Tags:${recipe.tags}</h2>
          </div>
          <button class="recipe__button--favorite"><img id="image" src="../img/favorite.svg" /></button>
          <button class="recipe__button--cook"><img id="image" src="../img/cook.svg" /></button>
        </div>
        <article class='recipe__article--full'>
          <div class='article--ingredients'>
            <h2>Ingredients:</h2>
            <p class='div__p--ingredients'>${recipe.displayIngredients()}</p>
          </div>
          <div class='article--instructions'>
            <h2>Instructions:</h2>
            <p class='div__p--instructions'>${recipe.displayInstructions()}</p>
          </div>
        </article>
      </section>
  `;
  }

  displayRecipeCard(recipe) {
    return `
      <article class='recipe__article'>
        <img class='article__img' src=${recipe.image}>
        <h1 class='article__h1'>${recipe.name}</h1>
        <div class='article__div'>
          <button class='article__btn article__btn--favorite'>Favorite</button>
          <button class='article__btn article__btn--to-cook'>To Cook</button>
        </div>
      </article>
      `;
  }
}



if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
