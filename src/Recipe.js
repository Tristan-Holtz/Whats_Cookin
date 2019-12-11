class Recipe {
  constructor(recipe) {
    this.name = recipe.name;
    this.id = recipe.id;
    this.tags = recipe.tags;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.isFavorited = recipe.isFavorited ? recipe.isFavorited : false;
    this.willCook = recipe.willCook ? recipe.willCook : false;
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
    return this.instructions.reduce((acc, instruction) => {
      acc += `<li>${[instruction.number]} : ${instruction.instruction}</li>`;
      return acc;
    }, '')
  }

  displayIngredients() {
    return this.ingredients.reduce((acc, ingredient) => {
      acc += `<li>${[ingredient.name]} : ${ingredient.quantity.amount} ${ingredient.quantity.unit}</li>`; 
      return acc;
    }, '')
  }

  displayRecipePage() {
    return `
    <section class="recipe">
        <section class="recipe__img">
        <img class="article__img" src=${this.image} alt="A picture of ${this.name}"></section>
        <div class="recipe--data">
          <div class="recipe--name">
            <h1>${this.name.toUpperCase()}</h1>
            <h2>Tags: ${this.tags.toString().split(',').join(', ')}</h2>
          </div>
          <button class="recipe__button--favorite"><img id="image" src="../img/favorite.svg" /></button>
          <button class="recipe__button--cook"><img id="image" src="../img/cook.svg" /></button>
        </div>
        <article class="recipe__article--full">
          <div class="article--ingredients">
            <h2>Ingredients:</h2>
            <ul class="ul--ingredients" type="circle">${this.displayIngredients()}</ul>
          </div>
          <div class="article--instructions">
            <h2>Instructions:</h2>
            <ul class="ul--instructions" type="circle">${this.displayInstructions()}</ul>
          </div>
        </article>
      </section>
  `;
  }

  recipeClassDisplay(type, inputRecipe) {
    //need to pass in the local storage match, match the value from local storage 
    // debugger;
    const storageRecipes = JSON.parse(localStorage.getItem(type));
    if (storageRecipes) {
      var storageMatch = storageRecipes.find((recipe) => {
        return recipe.id === inputRecipe.id;
      })
    }
    switch (type) {
    case 'favoriteRecipes':
      if (storageMatch ? storageMatch.isFavorited : false) {
        return 'article__btn--favorited';
      } else {
        return 'article__btn--favorite';
      }
    case 'recipesToCook':
      if (storageMatch ? storageMatch.willCook : false) {
        return 'article__btn--cooking';
      } else {
        return 'article__btn--cook';
      }
    }
  }
  
  displayRecipeCard(recipe) {
    return `
      <article data-id="${recipe.id}" class="recipe__article">
        <a href="display-recipe.html">
        <img class="article__img" src=${recipe.image} alt="A picture of ${recipe.name}"></a>
        <h1 class="article__h1">${recipe.name}</h1>
        <div class="article__div">
          <button class="article__btn ${recipe.recipeClassDisplay('favoriteRecipes', recipe)}">Favorite</button>
          <button class="article__btn ${recipe.recipeClassDisplay('recipesToCook', recipe)}">To Cook</button>
        </div>
      </article>
      `;
  }

  toggleCook() {
    this.willCook = !this.willCook;
  }

  toggleFavorite() {
    this.isFavorited = !this.favorited;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
