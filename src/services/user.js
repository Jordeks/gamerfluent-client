const URL = 'http://localhost:3000/api/v1/'

export const login = (data, handleLogin) => {
  fetch(`${URL}/login`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    localStorage.setItem('token', data.jwt)
    handleLogin(data.user)
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}