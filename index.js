const grid = document.querySelector(".grid");
//const cards = document.querySelectorAll("card");

let round = 0;

let cardDeck = [
  {
    name: "broly",
    img: "images/broly.png",
  },
  {
    name: "fusion",
    img: "images/fusion.png",
  },
  {
    name: "goku",
    img: "images/goku.png",
  },
  {
    name: "gohan",
    img: "images/gohan.png",
  },
  {
    name: "trunks",
    img: "images/trunks.png",
  },
  {
    name: "vegeta",
    img: "images/vegeta.png",
  },
  {
    name: "broly",
    img: "images/broly.png",
  },
  {
    name: "fusion",
    img: "images/fusion.png",
  },
  {
    name: "goku",
    img: "images/goku.png",
  },
  {
    name: "gohan",
    img: "images/gohan.png",
  },
  {
    name: "trunks",
    img: "images/trunks.png",
  },
  {
    name: "vegeta",
    img: "images/vegeta.png",
  },
];

function beginGame() {
  //newRound();
  createCardGrid();
}
beginGame();

function createCardGrid() {
  for (let i = 0; i < cardDeck.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", "images/cards2.png");
    card.setAttribute("data-id", i);
    card.setAttribute("class", "card");
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(cardDeck[cardId].name);
  console.log(cardsChosen);
}
const cards = document.querySelectorAll(".card");

function newRound() {
  round += 1;
  resetGrid();
  shuffleCards();
  displayCards();
}

function checkMatch() {}

let cardsChosen = [];
