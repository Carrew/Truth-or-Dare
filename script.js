const home = document.getElementById("home");
const game = document.getElementById("game");
const promptBox = document.getElementById("promptBox");

async function init() {
  await loadData();
}

init();

// Start game
function startGame(type) {
  currentType = type;

  home.classList.add("hidden");
  game.classList.remove("hidden");

  showNext();
}

// Show next prompt
function showNext() {
  const prompt = getNext(currentType);
  animatePrompt(prompt);
}

// Next button
function nextPrompt() {
  showNext();
}

// Back home
function backHome() {
  game.classList.add("hidden");
  home.classList.remove("hidden");
}

// Smooth animation feel
function animatePrompt(text) {
  promptBox.style.opacity = 0;
  promptBox.style.transform = "scale(0.95)";

  setTimeout(() => {
    promptBox.innerText = text;
    promptBox.style.opacity = 1;
    promptBox.style.transform = "scale(1)";
  }, 120);
}
