let round = 0;

function beginGame() {
  newRound();
}

function newRound() {
  round += 1;
  resetGrid();
  shuffleCards();
  displayCards();
}

function checkMatch() {}
