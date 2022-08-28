const validateOtp = async (otp) => {
  const response = await fetch('http://localhost:3000/api/users/ed8bda44-b7e6-4887-a77c-896c6a53d9a8/verify-otp', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      otp
    })
  });
  return response.json();
}

export default validateOtp;