const getList = async (data) => {
  const {
    startPoint,
    destinationPoint,
    tripStartDate,
    shipmentWeight
  } = data;
  let url = 'http://localhost:3000/api/rides?limit=1000&offset=0';
  url = url + `&startPoint=${startPoint}`;
  url = url + `&destinationPoint=${destinationPoint}`;
  url= url + `&tripStartDate=${tripStartDate?.split("T")[0]}`;
  url = url + `&shipmentWeight=${shipmentWeight}`;
  const response = await fetch(url,{
    method: 'GET'
  });
  return response.json();
}

export default getList;