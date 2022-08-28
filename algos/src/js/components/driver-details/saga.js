const getDriverDetails = async (id) => {
  const response = await fetch(`http://localhost:3000/api/rides/${id}`,{
    method: 'GET'
  });
  return response.json();
}

export default getDriverDetails;