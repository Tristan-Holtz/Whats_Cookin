const chai = require("chai");
const expect = chai.expect;

const Recipe = require('../src/Recipe');
const recipeData = require('../data/recipe-data');

describe('Recipe', () => {

let recipe1;

  beforeEach(() => {
    recipe1 = new Recipe({
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "id": 595736,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [
        {
          "name": "all purpose flour",
          "id": 20081,
          "quanitity": {
            "amount": 1.5,
            "unit": "c"
          }
        }
      ],
      "instructions": [
        {
          "number": 1,
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy."
        }
      ]
    });
  })

  it('should be a specific instance of Recipe', () => {


    expect(recipe1).to.be.an.instanceof(Recipe);
  })

  it('should have an ingredients stored as a property', () => {

    expect(recipe1.ingredients).to.deep.equal([{
          "name": "all purpose flour",
          "id": 20081,
          "quanitity": {
            "amount": 1.5,
            "unit": "c"
          }
        }
      ]);
    })

  it('should have an instructions stored as a property', () => {


    expect(recipe1.instructions).to.deep.equal([
      {
        "number": 1,
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy."
      }
    ])
  })

  it('should be able to store tag as a property', () => {


    expect(recipe1.id).to.equal(595736);
  })

  it('should store name as a property', () => {


    expect(recipe1.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
  })

  it.skip('should be able to calculate cost', () => {


    expect();
  })

})
