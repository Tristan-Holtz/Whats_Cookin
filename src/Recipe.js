class Recipe {
  constructor(recipe) {
    this.name = recipe.name;
    this.id = recipe.id;
    this.tags = recipe.tags;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.favorited = recipe.favorited ? recipe.favorited : false;
    this.toCook = recipe.toCook ? recipe.toCook : false;
  };

  calculateCost() {
    return this.ingredients.reduce((acc, recipeIngredient) => {
      ingredientsData.forEach((ingredient) => {
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

  displayRecipePage() {
    return `
    <section class='recipe'>
        <section class='recipe__img'>
        <img class='article__img' src=${this.image} alt='A picture of ${this.name}'></section>
        <div class='recipe--data'>
          <div class='recipe--name'>
            <h1>${this.name.toUpperCase()}</h1>
            <h2>Tags:${this.tags}</h2>
          </div>
          <button class="recipe__button--favorite"><img id="image" src="../img/favorite.svg" /></button>
          <button class="recipe__button--cook"><img id="image" src="../img/cook.svg" /></button>
        </div>
        <article class='recipe__article--full'>
          <div class='article--ingredients'>
            <h2>Ingredients:</h2>
            <p class='div__p--ingredients'>${this.displayIngredients()}</p>
          </div>
          <div class='article--instructions'>
            <h2>Instructions:</h2>
            <p class='div__p--instructions'>${this.displayInstructions()}</p>
          </div>
        </article>
      </section>
  `;
  }

  displayRecipeCard(recipe) {
    return `
      <article data-id='${recipe.id}' class='recipe__article'>
        <a href="display-recipe.html">
        <img class='article__img' src=${recipe.image} alt='A picture of ${recipe.name}'></a>
        <h1 class='article__h1'>${recipe.name}</h1>
        <div class='article__div'>
          <button class='article__btn article__btn--favorite'>Favorite</button>
          <button class='article__btn article__btn--cook'>To Cook</button>
        </div>
      </article>
      `;
  }

  toggleCook() {
    this.toCook = !this.toCook;
  }

  toggleFavorite() {
    this.favorited = !this.favorited;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
