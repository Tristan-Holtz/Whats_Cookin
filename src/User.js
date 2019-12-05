class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }
}

if (typeof module !== 'undefined') {
    module.exports = User;
}