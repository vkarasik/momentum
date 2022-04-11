export default function greeting() {
  const date = new Date();
  const hour = date.getHours();
  const dayParts = ['Good night,', 'Good morning,', 'Good afternoon,', 'Good evening,'];
  const index = Math.floor(hour / 6);
  const greetingEl = document.querySelector('.greeting__text');
  greetingEl.textContent = dayParts[index];

  setTimeout(() => {
    greeting();
  }, 60000);
}
