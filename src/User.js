class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  storeRecipe(type, recipe) {
    switch (type) {
    case 'favorite':
      this.favoriteRecipes.push(recipe);
      // this.favoriteRecipes = Array.from(new Set(this.favoriteRecipes))
      // why JSON stringify?
      this.favoriteRecipes = this.favoriteRecipes.filter((recipe, index, allRecipes) => index === allRecipes.findIndex((searchIndex) => searchIndex.id === recipe.id))
      //either way need to reinstanciate as recipes. 
      break;
    case 'cook':
      this.recipesToCook.push(recipe)
      this.recipesToCook = Array.from(new Set(this.recipesToCook.map(JSON.stringify))).map(JSON.parse)
      break;
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}