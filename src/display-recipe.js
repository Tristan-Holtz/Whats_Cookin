const main = document.querySelector('.main');

const recipePageDisplay = () => {
  const storedRecipe = JSON.parse(localStorage.getItem('selectedRecipe'));
  const recipe = new Recipe(storedRecipe);
  main.insertAdjacentHTML('beforeend', recipe.displayRecipePage());
}

window.addEventListener('onload', recipePageDisplay());