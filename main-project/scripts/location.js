//IP Geolocation API key: at_li3f8R0tOlJuEDDN3GYZUg3ivU03j

const form = document.querySelector('.search-form');
form.addEventListener('submit', async function(e){
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const res = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_li3f8R0tOlJuEDDN3GYZUg3ivU03j&ipAddress=${searchTerm}`)

  let ip = res.data.ip;
  let location = res.data.location.city + ' ' + res.data.location.postalCode;
  let timezone = res.data.location.timezone;
  let isp = res.data.isp;

  document.querySelector('.ip').innerText = ip;
  document.querySelector('.location').innerText = location;
  document.querySelector('.timezone').innerText = timezone;
  document.querySelector('.isp').innerText = isp;

  lat = res.data.location.lat;
  lng = res.data.location.lng;
});



  