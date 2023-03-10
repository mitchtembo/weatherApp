const getCity = async (city) => {
  const base = "https://dataservice.accuweather.com/locations/v1/cities/search";
  
  const apiKey = "g2ZIx7ADMAMyoVm4yd8Q4IaHXrtRekMV";

  
  //const response = await fetch(base + query);
  
  const response = await axios.get(base , {
    params: {
      apikey: apiKey,
      q: city
    }
  })
  // no need for response.json() when using axios aka parsing as ajson object 
  const data = response.data
  //console.log(data[0].Key);
  let cityDets =  data[0]
  //console.log(locationKey)

  // the return value is the promiseValue
  return cityDets
};




const cityCondition = async (id) => {

  //let locationKey = await getCity('pretoria');

  const base = `https://dataservice.accuweather.com/currentconditions/v1/${id}`;

  const apiKey = "g2ZIx7ADMAMyoVm4yd8Q4IaHXrtRekMV"
  const response = await axios.get(base ,{
    params: {
      apikey: apiKey
    }
  });
  const data = response.data[0]

//const weatherCondition =  data.WeatherText;
//const weatherIcon      =  data.WeatherIcon;
//const dayTime          = data.IsDayTime
    
 //console.log(data,weatherCondition,weatherIcon,dayTime)

 //promiseValue when the async func is fullfilled
return data;

}




