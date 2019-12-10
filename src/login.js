const loginInp = document.querySelector('.login__input');
const loginSub = document.querySelector('.login__button--submit');

const nameStorage = () => {
  localStorage.setItem('name', loginInp.value);
}

loginSub.addEventListener('click', nameStorage);