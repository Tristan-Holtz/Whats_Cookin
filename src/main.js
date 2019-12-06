const cookbook = new Cookbook();
const recipeSection = document.querySelector('.recipes__section')

const writeCookbook = () => {
  recipeData.forEach((recipe) => {
    cookbook.cookbook.push(new Recipe(recipe));
  })
}

const showRecipes = () => {
  writeCookbook();
  recipeSection.insertAdjacentHTML('beforeend', cookbook.allRecipesHTML())
}

window.addEventListener('onload', showRecipes());
