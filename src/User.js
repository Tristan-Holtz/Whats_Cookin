class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  storeRecipe(type, recipe) {
    this[type].push(recipe);
    localStorage.setItem(type,
      JSON.stringify(this[type]));
  }

  removeRecipe(type, recipe) {
    const index = this[type].findIndex(userRecipe => recipe === userRecipe);
    this[type].splice(index, 1);
    localStorage.setItem(type,
      JSON.stringify(this[type]));
  }

  filterRecipe(type, tag, allRecipes) {
    switch (type) {
    case 'favoriteRecipes':
      return this.favoriteRecipes.filter(recipe => recipe.tags.includes(tag))
    case 'recipesToCook':
      return this.recipesToCook.filter(recipe => recipe.tags.includes(tag))
    default:
      return allRecipes.filter(recipe => recipe.tags.includes(tag))
    }
  }

  searchRecipe(type, keyword, allRecipes) {
    switch (type) {
    case 'favoriteRecipes':
      return this.favoriteRecipes.filter(recipe => recipe.ingredients.some(ingredient => ingredient.name.includes(keyword)))
    case 'recipesToCook':
      return this.recipesToCook.filter(recipe => recipe.ingredients.some(ingredient => ingredient.name.includes(keyword)))
    default:
      return allRecipes.filter(recipe => recipe.ingredients.some(ingredient => ingredient.name.includes(keyword)))
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
