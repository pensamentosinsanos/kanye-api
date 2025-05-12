let quotes = [];

async function loadQuotes() {
  const url = "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/src/quotes.json";
  const res = await fetch(url);
  quotes = await res.json();
}

function getQuote() {
  const quoteEl = document.getElementById("quote");
  quoteEl.classList.add("fade-out");
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteEl.innerText = quotes[randomIndex];
    quoteEl.classList.remove("fade-out");
  }, 500);
}

loadQuotes().then(() => {
  getQuote();
});