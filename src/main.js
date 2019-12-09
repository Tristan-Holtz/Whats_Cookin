const cookbook = new Cookbook();
const recipeSection = document.querySelector('.recipes__section');
const user = new User(1);


const writeCookbook = () => {
  recipeData.forEach((recipe) => {
    cookbook.cookbook.push(new Recipe(recipe));
  })
}

const showRecipes = () => {
  writeCookbook();
  recipeSection.insertAdjacentHTML('beforeend', cookbook.allRecipesHTML());
}

const addFavorite = (recipe) => {
  recipe.toggleFavorite();
  user.storeRecipe('favoriteRecipes', recipe);
  event.target.classList.remove('article__btn--favorite');
  event.target.classList.add('article__btn--favorited');
}

const recipeClickHandler = ({ target }) => {
  const clases = target.classList;
  const recipeId = target.closest('recipe__article').dataset.id;
  const cookbookRecipe = cookbook.findRecipe(recipeId);
  if (classes.contains('article__btn--favorite')) {
    addFavorite(cookbookRecipe);
  } else if (classes.contains('article__btn--cook') {
    recipe.toggleCook();
    user.storeRecipe('recipesToCook', cookbookRecipe);
  }

}



window.addEventListener('onload', showRecipes());
recipeSection.addEventListener('click', (event) => recipeClickHandler(event));
