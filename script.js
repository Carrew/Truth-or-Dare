const home = document.getElementById("home");
const game = document.getElementById("game");

const card = document.getElementById("card");
const cardText = document.getElementById("cardText");
const status = document.getElementById("status");

let locked = false;

async function init() {
  await loadData();
}

init();

function startGame(type) {
  currentType = type;

  home.classList.add("hidden");
  game.classList.remove("hidden");

  resetCard();
}

function reveal() {
  if (locked) return;

  locked = true;

  // start mystery mode
  card.classList.add("shaking");
  cardText.innerText = "Randomizing...";
  status.innerText = "Hold on...";

  setTimeout(() => {
    const prompt = getNext(currentType);

    card.classList.remove("shaking");

    cardText.innerText = prompt;
    status.innerText = "Tap for next";

    locked = false;
  }, 900);
}

function resetCard() {
  cardText.innerText = "Tap to reveal";
  status.innerText = "Let the game decide";
}

function backHome() {
  game.classList.add("hidden");
  home.classList.remove("hidden");
}
