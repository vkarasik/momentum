export default function resizeInput() {
  const nameInput = document.querySelector('.greeting__name');
  const fakeInput = document.createElement('span');
  fakeInput.classList.add('greeting__fake-name');
  fakeInput.textContent = nameInput.value;
  nameInput.parentNode.appendChild(fakeInput);
  nameInput.style.width = `${fakeInput.clientWidth}px`;
  fakeInput.remove();
}
