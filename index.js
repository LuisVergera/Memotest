const grid = document.querySelector(".grid");

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

cardDeck.sort(() => 0.5 - Math.random());

function beginGame() {
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
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardDeck[cardId].img);
  checkMatch();
}
const cards = document.querySelectorAll(".card");

function checkMatch() {
  let cardsChosen1 = cardsChosen[0];
  let cardsChosen2 = cardsChosen[1];
  if (cardsChosen.length === 2) {
    setTimeout(() => {
      if (
        cardsChosen1 === cardsChosen2 &&
        cardsChosenId[0] != cardsChosenId[1]
      ) {
        console.log("match");
        cardsChosen = [];
        cardsChosenId = [];
      } else {
        cards[cardsChosenId[0]].setAttribute("src", "images/cards2.png");
        cards[cardsChosenId[1]].setAttribute("src", "images/cards2.png");
        cardsChosen = [];
        cardsChosenId = [];
      }
    }, 750);
  }
}

let cardsChosen = [];
let cardsChosenId = [];

function removeCards() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}
