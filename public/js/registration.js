document.regForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  const login = event.target.login.value
  const password = event.target.password.value

  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify({ login, password })
  })
})
