async function getWeather(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=15eb6ec60926b3809685b0806f9c4b6e&units=metric&q=${location}`;
  let response = await fetch(url);
  let data = await response.json();

  const desc = document.querySelector('.weather__desc');
  const icon = document.querySelector('.weather__icon');
  const wind = document.querySelector('.weather__wind');
  const humidity = document.querySelector('.weather__humidity');
  const error = document.querySelector('.weather__err');

  if (data.cod == '404' || data.cod == '400') {
    desc.innerHTML = '';
    icon.style.display = 'none';
    wind.style.display = 'none';
    wind.innerHTML = '';
    humidity.style.display = 'none';
    humidity.innerHTML = '';
    error.innerHTML = 'Location not found';
    return false;
  } else {
    desc.innerHTML = `${Math.round(data.main.temp)} °С ${data.weather[0].description}`;
    humidity.style.display = 'flex';
    wind.style.display = 'flex';
    icon.style.display = 'block';
    icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    wind.innerHTML = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    error.innerHTML = '';
  }
}

export default getWeather;
