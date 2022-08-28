export const getTypes = async () => {
  const response = await fetch('http://localhost:3000/api/vehicles/types',{
    method: 'GET'
  });
  return response.json();
}

export const createRide = async (data) => {
  const {
    startPoint,
    destinationPoint,
    tripStartDate,
    weight,
    userId,
    id,
    driverAvailableStartTime,
    driverAvailableEndTime
  } = data;
  const response = await fetch('http://localhost:3000/api/rides',{
    method: 'POST',
    body: JSON.stringify({
      startPoint,
    destinationPoint,
    tripStartDate,
    weight,
    userId,
    vehicleId: id,
    driverAvailableStartTime,
    driverAvailableEndTime
    })
  });
  return response.json();
};

export const enterRiderDetails = async (data) => {
  const {
    type,
    registrationNumber,
    avatar = 'person3',
    brand = 'Bharat Benz',
    userId
  } = data;
  const response = await fetch('http://localhost:3000/api/vehicles',{
    method: 'POST',
    body: JSON.stringify({
      type,
      registrationNumber,
      avatar,
      brand,
      userId
    })
  });
  return response.json();
};
