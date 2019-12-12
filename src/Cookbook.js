class Cookbook {
  constructor() {
    this.cookbook = [];
  }

  allRecipesHTML() {
    return this.cookbook.reduce((html, recipe) => {
      html += recipe.displayRecipeCard(recipe);
      return html;
    }, '');
  }

  findRecipe(id) {
    return this.cookbook.find((recipe) => {
      return recipe.id.toString() === id;
    })
  }

  writeCookbook(recipes) {
    this.cookbook = [];
    recipes.forEach(recipe => {
      this.cookbook.push(new Recipe(recipe));
    })
  }
}

if (typeof module !== 'undefined') {
  module.exports = Cookbook;
}
