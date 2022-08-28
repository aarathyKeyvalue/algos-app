const registerUser = async ({ name, password, phoneNumber }) => {
  const response = await fetch('http://localhost:3000/api/users/register', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      name,
      password,
      phoneNumber
    })
  });
  return response.json();
}

export default registerUser;