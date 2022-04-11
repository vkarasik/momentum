const slider = () => {
  let slideNum = getRandomNum();

  function getRandomNum() {
    return Math.floor(Math.random() * 20 + 1);
  }

  function setBg() {
    const date = new Date();
    const hour = date.getHours();
    const dayParts = ['night', 'morning', 'afternoon', 'evening'];
    const index = Math.floor(hour / 6);
    slideNum = slideNum < 10 ? '0' + slideNum : slideNum;
    const body = document.querySelector('body');
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/vkarasik/stage1-tasks/assets/images/${dayParts[index]}/${slideNum}.jpg`;
    img.onload = () => {
      body.style.backgroundImage = `url(${img.src})`;
    };
  }

  const sliderBtn = document.querySelectorAll('.arrow');
  sliderBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
      if (e.target.classList.contains('arrow_next')) {
        slideNum = slideNum < 20 ? ++slideNum : 1;
      } else {
        slideNum = slideNum > 1 ? --slideNum : 20;
      }
      setBg();
    });
  });

  setBg();
};

export default slider;
