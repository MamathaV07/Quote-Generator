let button = document.querySelector(".quote_button");
let person = document.querySelector(".person");
let quotes = document.querySelector(".quotes");

const quote = [
  {
    quotes: "Leadership is the capacity to translate vision into reality.",
    person: "WARREN BENNIS",
  },
  {
    quotes: "Dream big, start small, but most importantly, start.",
    person: "SIMON SINEK",
  },
  {
    quotes: "An unexamined life is not worth living.",
    person: "SOCRATES",
  },
  {
    quotes:
      "The only way to achieve the impossible is to believe it is possible.",
    person: "CHARLES KINGSLEIGH",
  },
  {
    quotes:
      "Self-discipline is the magic power that makes you virtually unstoppable.",
    person: "DAN KENNEDY",
  },
  {
    quotes:
      "You are never too old to set another goal or to dream a new dream.",
    person: "C.S. LEWIS",
  },
  {
    quotes:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    person: "RALPH WALDO EMERSON",
  },
];

button.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quote.length);

  quotes.innerText = quote[random].quotes;
  person.innerText = quote[random].person;
});
