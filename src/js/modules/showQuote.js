export default async function showQuote() {
  const src = './assets/json/quotes.json';
  const request = await fetch(src);
  const data = await request.json();

  const randNum = Math.floor(Math.random() * data.length + 1);
  const quote = data[randNum];
  const quoteEl = document.querySelector('.quote__text');
  const authorEl = document.querySelector('.quote__author');

  quoteEl.textContent = quote['text'];
  authorEl.textContent = quote['author'] ? quote['author'] : 'Unknown Author';
}
