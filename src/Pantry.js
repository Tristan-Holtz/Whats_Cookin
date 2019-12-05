class Pantry {
  constructor(id, pantry) {
    this.id = id;
    this.pantry = pantry;
  }

  checkPantry(recipe) {
    return recipe.ingredients.reduce((missingIngredients, recipeIng) => {
      //check if you cant find the ingredient in the pantry
      if (!this.pantry.find(pantryIng => pantryIng.ingredient === recipeIng.id)) {
        //if so add it to acc array
        missingIngredients.push(recipeIng);
      }
      return missingIngredients;
    }, []);
    //if this function returns empty array you know you have all the items, otherwise it will return you what you don't have
  }

  useIngredients() {
    
  }
}

module.exports = Pantry; 