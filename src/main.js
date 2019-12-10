const cookbook = new Cookbook();
const recipeSection = document.querySelector('.recipes__section');
const favoriteBtn = document.querySelector('.nav__btn--favorites');
const cookBtn = document.querySelector('.nav__btn--cook');
const searchInp = document.querySelector('.dashboard__input--search');
const user = new User();


const writeCookbook = (recipes) => {
  cookbook.cookbook = [];
  recipes.forEach((recipe) => {
    cookbook.cookbook.push(new Recipe(recipe));
  })
}

const chooseRecipe = (event) => {
  const recipeId = event.target.closest('.recipe__article').dataset.id;
  const cookbookRecipe = cookbook.findRecipe(recipeId);
  localStorage.setItem('selectedRecipe', 
    JSON.stringify(cookbookRecipe))
}

const search = () => {
  const recipes = user.searchRecipes('', searchInp.value.toLowerCase());
  refreshRecipes(recipes);
}

searchInp.addEventListener('keyup', search);

const loadRecipes = () => {
  writeCookbook(recipeData);
  user.loadRecipes();
  recipeSection.insertAdjacentHTML('beforeend', cookbook.allRecipesHTML());
}

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
  event.target.classList.add('recipe-toCook');
  user.storeRecipe('recipesToCook', recipe);
  recipe.toggleCook();
}

const removeToCook = (recipe) => {
  event.target.classList.remove('recipe-toCook');
  recipe.toggleCook();
  user.removeRecipe('recipesToCook', recipe);
}

const refreshRecipes = (recipes) => {
  recipeSection.innerHTML = '';
  writeCookbook(recipes);
  recipeSection.insertAdjacentHTML('beforeend', cookbook.allRecipesHTML());
}

favoriteBtn.addEventListener('click', () => refreshRecipes(user.favoriteRecipes))
cookBtn.addEventListener('click', () => refreshRecipes(user.recipesToCook))

const recipeClickHandler = (event) => {
  const classes = event.target.classList;
  const recipeId = event.target.closest('.recipe__article').dataset.id;
  const cookbookRecipe = cookbook.findRecipe(recipeId);
  chooseRecipe(event);
  if (classes.contains('article__btn--favorite')) {
    addFavorite(cookbookRecipe);
  } else if (classes.contains('recipe-toCook')) {
    removeToCook(cookbookRecipe);
  } else if (classes.contains('article__btn--cook')) {
    addToCook(cookbookRecipe);
  } else if (classes.contains('article__btn--favorited')) {
    removeFavorite(cookbookRecipe);
  }
}

window.addEventListener('onload', loadRecipes());
recipeSection.addEventListener('click', (event) => recipeClickHandler(event));
