const chai = require("chai");
const expect = chai.expect;

const Recipe = require('../src/Recipe');
const recipeData = require('../data/recipes');
const ingredientData = require('../data/ingredients');

describe('Recipe', () => {

let recipe1;

  beforeEach(() => {
    recipe1 = new Recipe(recipeData[0]);
  })

  it('should be a specific instance of Recipe', () => {


    expect(recipe1).to.be.an.instanceof(Recipe);
  })

  it('should have an ingredients stored as a property', () => {

    expect(recipe1.ingredients).to.deep.equal(recipeData[0].ingredients);
    })

  it('should have an instructions stored as a property', () => {


    expect(recipe1.instructions).to.deep.equal(recipeData[0].instructions);
  })

  it('should be able to store tag as a property', () => {


    expect(recipe1.id).to.equal(595736);
  })

  it('should store name as a property', () => {


    expect(recipe1.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
  })

  it('should be able to display instructions', () => {

    recipe1.displayInstructions();
    expect(recipe1.displayInstructions()).to.deep.equal({
      1: "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
      2: "Add egg and vanilla and mix until combined.",
      3: "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
      4: "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
      5: "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
      6: "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
    });
  })

  it('should be able to calculate the cost of ingredients needed to prepare a recipe', () => {

    recipe1.calculateCost();
    expect(recipe1.calculateCost()).to.equal(570.85);
  })


})
