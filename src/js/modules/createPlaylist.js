function createPlaylist(playList) {
  const playListNode = document.querySelector('.player__list');

  playList.forEach((element) => {
    const track = document.createElement('div');
    track.classList.add('player__list-item');
    track.innerHTML = element.title;
    playListNode.appendChild(track);
  });
}

export default createPlaylist;
