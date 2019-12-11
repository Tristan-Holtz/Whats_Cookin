const pantry = document.querySelector('.pantry__list');
const pantryHeader = document.querySelector('.pantry__header');
const storedUser = JSON.parse(localStorage.getItem('user'))
const user = new User(storedUser);

const recipePageDisplay = () => {
  pantryHeader.innerHTML = `${user.name}'s Pantry`
  pantry.insertAdjacentHTML('beforeend', user.pantry.displayIngredients());
}

window.addEventListener('onload', recipePageDisplay());