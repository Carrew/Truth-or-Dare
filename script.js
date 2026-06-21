async function init() {
  await loadData();
}

init();

function showTruth() {
  document.getElementById("promptBox").innerText = generatePrompt("truth");
}

function showDare() {
  document.getElementById("promptBox").innerText = generatePrompt("dare");
}

function showRandom() {
  document.getElementById("promptBox").innerText = generatePrompt("random");
}

function next() {
  document.getElementById("promptBox").innerText = "Pick again 🔥";
}
