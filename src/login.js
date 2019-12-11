const loginInp = document.querySelector('.login__input');
const loginSub = document.querySelector('.login__button--submit');

const userStorage = () => {
  const userName = loginInp.value
  const userDetails = usersData.find(user => user.name === userName);
  const user = userDetails ? userDetails : usersData[0];
  localStorage.setItem('user', JSON.stringify(user));
}

loginSub.addEventListener('click', userStorage);