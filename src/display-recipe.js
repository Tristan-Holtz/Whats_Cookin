const main = document.querySelector('.main');
const body = document.querySelector('.body');

const recipePageDisplay = () => {
  const storedRecipe = JSON.parse(localStorage.getItem('selectedRecipe'));
  const recipe = new Recipe(storedRecipe);
  main.insertAdjacentHTML('beforeend', recipe.displayRecipePage());
}

const returnPage = (event) => {
  if (event.target.className === 'main' || event.target.className === 'body') {
    window.location.href = 'index.html';
  }
}

body.addEventListener('click', returnPage);

window.addEventListener('onload', recipePageDisplay());