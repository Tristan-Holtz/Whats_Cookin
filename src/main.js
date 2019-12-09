const cookbook = new Cookbook();
const recipeSection = document.querySelector('.recipes__section');
var selectedRecipe; 

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
  recipeSection.insertAdjacentHTML('beforeend', cookbook.allRecipesHTML())
}

window.addEventListener('onload', loadRecipes());
