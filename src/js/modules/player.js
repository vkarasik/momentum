import playList from './playList';

const player = () => {
  const audio = new Audio();
  let playNum = 0;
  audio.src = playList[playNum].src;
  let isPlay = false;
  let currentTime = 0;

  const tracks = document.querySelectorAll('.player__list-item');

  const playPauseBtn = document.querySelector('.player__button_play');
  playPauseBtn.addEventListener('click', playAudio);

  const playNextBtn = document.querySelector('.player__button_next');
  playNextBtn.addEventListener('click', playNext);

  const playPrevBtn = document.querySelector('.player__button_prev');
  playPrevBtn.addEventListener('click', playPrev);

  audio.addEventListener('ended', () => {
    playNext();
  });

  function playAudio() {
    if (isPlay) {
      audio.pause();
      currentTime = audio.currentTime;
      isPlay = false;
      playPauseBtn.classList.toggle('player__button_pause');
    } else {
      audio.currentTime = currentTime;
      audio.play();
      isPlay = true;
      playPauseBtn.classList.toggle('player__button_pause');
      tracks[playNum].classList.add('player__list-item_active');
    }
  }

  function playNext() {
    playNum = playNum == playList.length - 1 ? 0 : ++playNum;
    audio.src = playList[playNum].src;
    audio.play();
    isPlay = true;
    playPauseBtn.classList.add('player__button_pause');
    tracks.forEach((i) => {
      i.classList.remove('player__list-item_active');
    });
    tracks[playNum].classList.add('player__list-item_active');
  }

  function playPrev() {
    playNum = playNum == 0 ? playList.length - 1 : --playNum;
    audio.src = playList[playNum].src;
    audio.play();
    isPlay = true;
    playPauseBtn.classList.add('player__button_pause');
    tracks.forEach((i) => {
      i.classList.remove('player__list-item_active');
    });
    tracks[playNum].classList.add('player__list-item_active');
  }
};

export default player;
