function setName() {
  const inputName = document.querySelector('.greeting__name');
  const userName = localStorage.getItem('user-name');
  inputName.style.width = 0;
  inputName.value = userName ? userName : '[Enter Name]';
}

export default setName;
