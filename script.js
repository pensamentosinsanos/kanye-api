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
      const newQuote = quotes[randomIndex];
      quoteEl.innerText = newQuote;
      quoteEl.classList.remove("fade-out");
      speakText(newQuote);
    }, 500);
  }

  function speakText(text) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  }
  loadQuotes().then(() => {
    getQuote();
  });