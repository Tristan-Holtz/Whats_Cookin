class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.pantry = new Pantry(user.id, user.pantry);
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

  filterRecipes(type, tag) {
    switch (type) {
    case 'favoriteRecipes':
      return this.favoriteRecipes.filter(recipe => recipe.tags.includes(tag))
    case 'recipesToCook':
      return this.recipesToCook.filter(recipe => recipe.tags.includes(tag))
    default:
      return recipeData.filter(recipe => recipe.tags.includes(tag))
    }
  }

  searchRecipes(type, keyword) {
    switch (type) {
    case 'favoriteRecipes':
      return this.favoriteRecipes.filter(recipe => recipe.ingredients.some(ingredient => ingredient.name.includes(keyword)))
    case 'recipesToCook':
      return this.recipesToCook.filter(recipe => recipe.ingredients.some(ingredient => ingredient.name.includes(keyword)))
    default:
      return recipeData.filter(recipe => {
        return (recipe.name.includes(keyword) || recipe.ingredients.some(ingredient => ingredient.name.includes(keyword)))
      })
    }
  }

  loadRecipes() {
    const storageFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const storageCook = JSON.parse(localStorage.getItem('recipesToCook'));
    if (storageFavorite) {
    storageFavorite.forEach(favorite => this.favoriteRecipes.push(new Recipe(favorite)));
    } 
    if (storageCook) {
    storageCook.forEach(cookRecipe => this.recipesToCook.push(new Recipe(cookRecipe)));
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
