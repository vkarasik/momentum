function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const currentDate = date.toLocaleDateString('en-En', options);
  const time = document.querySelector('.time');
  const dateLine = document.querySelector('.date');
  time.textContent = currentTime;
  dateLine.textContent = currentDate;

  setTimeout(() => {
    showTime();
  }, 1000);
}

export default showTime;
