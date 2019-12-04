const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');

describe('User', () => {
  let user;

  beforeEach(() => {
    // user = new User(userData[0].id,userData[0].name);
    user = new User(1, "Carole Fay");
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(user).to.be.an.instanceof(User);
  });

  it('should start with the passed in ID', () => {
    expect(user.id).to.equal(1);
  });

  it('should start with the name passed in', () => {
    expect(user.name).to.equal("Carole Fay");
  });

  it('should start with an empty favorite recipe array', () => {
    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it('should start with an empty recipe to cook array', () => {
    expect(user.recipesToCook).to.deep.equal([]);
  });
});