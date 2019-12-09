class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  storeRecipe(type, recipe) {
    this[type].push(recipe);
  }

  removeRecipe(type, recipe) {
    this[type].remove(recipe);
  }

  filterRecipe(type, tag, allRecipes) {
    switch (type) {
    case 'favorite':
      return this.favoriteRecipes.filter(recipe => recipe.tags.includes(tag))
    case 'cook':
      return this.recipesToCook.filter(recipe => recipe.tags.includes(tag))
    case 'all':
      return allRecipes.filter(recipe => recipe.tags.includes(tag))
    }
  }

  searchRecipe(type, keyword, allRecipes) {
    switch (type) {
    case 'favorite':
      return this.favoriteRecipes.filter(recipe => recipe.ingredients.some(ingredient => ingredient.name.includes(keyword)))
    case 'cook':
      return this.recipesToCook.filter(recipe => recipe.ingredients.some(ingredient => ingredient.name.includes(keyword)))
    case 'all':
      return allRecipes.filter(recipe => recipe.ingredients.some(ingredient => ingredient.name.includes(keyword)))
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
