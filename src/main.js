const cookbook = new Cookbook();
const recipeSection = document.querySelector('.recipes__section');
<<<<<<< HEAD
var selectedRecipe; 
=======
const user = new User(1);

>>>>>>> master

const writeCookbook = () => {
  recipeData.forEach((recipe) => {
    cookbook.cookbook.push(new Recipe(recipe));
  })
}

const chooseRecipe = (event) => {
  if (event.target === 'img.article__img') {
    const recipeId = event.target.closest('.recipe__article').dataset.id;
    const cookbookRecipe = cookbook.findRecipe(recipeId);
    selectedRecipe === cookbookRecipe;
  }
}

recipeSection.addEventListener('click', chooseRecipe);

const loadRecipes = () => {
  writeCookbook();
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

const recipeClickHandler = (event) => {
  const classes = event.target.classList;
  const recipeId = event.target.closest('.recipe__article').dataset.id;
  const cookbookRecipe = cookbook.findRecipe(recipeId);
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


window.addEventListener('onload', showRecipes());
recipeSection.addEventListener('click', (event) => recipeClickHandler(event));
