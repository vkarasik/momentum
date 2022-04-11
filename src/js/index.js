import '../scss/main';

import createPlaylist from './modules/createPlaylist';
import playList from './modules/playList';
import player from './modules/player';
import getWeather from './modules/getWeather';
import showTime from './modules/showTime';
import setName from './modules/setName';
import greeting from './modules/greeting';
import resizeInput from './modules/resizeInput';
import showQuote from './modules/showQuote';
import slider from './modules/slider';

createPlaylist(playList);
player();

const location = localStorage.getItem('location') ? localStorage.getItem('location') : 'Minsk';
const inputLocation = document.querySelector('.weather__location');
inputLocation.value = location;
getWeather(location);

inputLocation.addEventListener('input', (e) => {
  localStorage.setItem('location', e.target.value);
  getWeather(e.target.value);
});

const nameInput = document.querySelector('.greeting__name');
nameInput.addEventListener('change', (e) => {
  localStorage.setItem('user-name', e.target.value);
  setName();
  resizeInput();
});

const reloadBtn = document.querySelector('.quote__reload');
reloadBtn.addEventListener('click', (e) => {
  showQuote();
  const angle = e.target.dataset.angle ? Number(e.target.dataset.angle) + 180 : 180;
  e.target.style.transform = `rotate(${angle}deg)`;
  e.target.dataset.angle = angle;
});

showTime();
setName();
greeting();
showQuote();
slider();

window.addEventListener('load', () => {
  resizeInput();
});
