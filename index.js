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
    card.setAttribute("id", "card");
    card.setAttribute("class", "cards");
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
<<<<<<< Updated upstream
  checkWin();
=======
>>>>>>> Stashed changes
}
const cards = document.getElementsByClassName("cards");

function checkMatch() {
  let cardsChosen1 = cardsChosen[0];
  let cardsChosen2 = cardsChosen[1];
  if (cardsChosen.length === 2) {
<<<<<<< Updated upstream
=======
    disableClick();
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    }, 750);
=======
    }, 1000);
>>>>>>> Stashed changes
  }
}

let cardsChosen = [];
let cardsChosenId = [];
<<<<<<< Updated upstream
=======

function removeCards() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function disableClick() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.pointerEvents = "none";
  }
}

function enableClick() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.pointerEvents = "auto";
  }
}
>>>>>>> Stashed changes
