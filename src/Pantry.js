class Pantry {
  constructor(id, pantry) {
    this.id = id;
    this.pantry = pantry;
  }

  displayIngredients() {
    const dupIng = [];
    return this.pantry.reduce((acc, ingredient) => {
      const matchIng = ingredientsData.find(matchIng => 
        matchIng.id === ingredient.ingredient);
      if (matchIng && (!dupIng.includes(matchIng.name))) {
        dupIng.push(matchIng.name);
        acc += `<li>${[ingredient.amount]} : ${matchIng.name}</li>`;
      }
      return acc;
    }, '')
  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}