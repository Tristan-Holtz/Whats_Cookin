const chai = require('chai');
const expect = chai.expect;
const userData = users-data.users;

const User = require('../src/User');

describe('User', () => {
  let user;

  beforeEach(() => {
    user = new User(userData[0].id,userData[0].name);
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(user).to.be.an.instanceof(User);
  });
});