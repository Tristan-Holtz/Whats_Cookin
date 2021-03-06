const recipeSection = document.querySelector('.recipes__section');
const favoriteBtn = document.querySelector('.nav__btn--favorites');
const homeIcon = document.querySelector('.header__icon');
const cookBtn = document.querySelector('.nav__btn--cook');
const searchInp = document.querySelector('.dashboard__input--search');
const filterInp = document.querySelector('.dashboard__input--category');
const cookbook = new Cookbook();
const user = new User(JSON.parse(localStorage.getItem('user')));
let windowStatus = '';

const chooseRecipe = (event) => {
  const recipeId = event.target.closest('.recipe__article').dataset.id;
  const cookbookRecipe = cookbook.findRecipe(recipeId);
  localStorage.setItem('selectedRecipe',
    JSON.stringify(cookbookRecipe))
}

const search = () => {
  const recipes = user.searchRecipes(windowStatus, 
    searchInp.value.toLowerCase());
  refreshRecipes(recipes);
}

searchInp.addEventListener('keyup', search);

const filter = () => {
  const recipes = user.filterRecipes(windowStatus, filterInp.value);
  refreshRecipes(recipes);
}

const loadRecipes = () => {
  recipeSection.innerHTML = '';
  cookbook.writeCookbook(recipeData);
  user.loadRecipes();
  recipeSection.insertAdjacentHTML('beforeend', cookbook.allRecipesHTML());
}

homeIcon.addEventListener('click', () => {
  windowStatus = '';
  loadRecipes();
})

const addFavorite = (recipe) => {
  recipe.toggleFavorite();
  user.storeRecipe('favoriteRecipes', recipe);
  event.target.classList.remove('article__btn--favorite');
  event.target.classList.add('article__btn--favorited');
}

const removeFavorite = (recipe) => {
  recipe.toggleFavorite();
  user.removeRecipe('favoriteRecipes', recipe);
  event.target.classList.add('article__btn--favorite');
  event.target.classList.remove('article__btn--favorited');
}

const addToCook = (recipe) => {
  event.target.classList.add('article__btn--cooking');
  event.target.classList.remove('article__btn--cook');
  user.storeRecipe('recipesToCook', recipe);
  recipe.toggleCook();
}

const removeToCook = (recipe) => {
  event.target.classList.add('article__btn--cook');
  event.target.classList.remove('article__btn--cooking');
  recipe.toggleCook();
  user.removeRecipe('recipesToCook', recipe);
}

const refreshRecipes = (recipes) => {
  recipeSection.innerHTML = '';
  cookbook.writeCookbook(recipes);
  recipeSection.insertAdjacentHTML('beforeend', cookbook.allRecipesHTML());
}

favoriteBtn.addEventListener('click', () => {
  windowStatus = 'favoriteRecipes';
  refreshRecipes(user.favoriteRecipes)
})
cookBtn.addEventListener('click', () => {
  windowStatus = 'recipesToCook';
  refreshRecipes(user.recipesToCook)
})

const recipeClickHandler = (event) => {
  const classes = event.target.classList;
  const recipeId = event.target.closest('.recipe__article').dataset.id;
  const cookbookRecipe = cookbook.findRecipe(recipeId);
  chooseRecipe(event);
  if (classes.contains('article__btn--favorite')) {
    addFavorite(cookbookRecipe);
  } else if (classes.contains('article__btn--cooking')) {
    removeToCook(cookbookRecipe);
  } else if (classes.contains('article__btn--cook')) {
    addToCook(cookbookRecipe);
  } else if (classes.contains('article__btn--favorited')) {
    removeFavorite(cookbookRecipe);
  }
}

filterInp.addEventListener('change', filter);
window.addEventListener('onload', loadRecipes());
recipeSection.addEventListener('click', (event) => recipeClickHandler(event));
