const formLogin = document.querySelector('.form-login');

formLogin.addEventListener('submit', (e) => {
  e.preventDefault()
  e.target.classList.toggle('form-login_hide');
})