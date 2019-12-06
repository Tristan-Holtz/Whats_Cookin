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
}

if (typeof module !== 'undefined') {
  module.exports = Cookbook;
}
