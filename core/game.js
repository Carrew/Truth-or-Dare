let truths = [];
let dares = [];

let currentMode = "single"; // future-proofing
let currentPrompt = "";

// Load data from JSON files
async function loadData() {
  const tRes = await fetch("./data/truths.json");
  const dRes = await fetch("./data/dares.json");

  truths = await tRes.json();
  dares = await dRes.json();
}

// Random picker
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate prompt
function generatePrompt(type) {
  if (type === "truth") {
    currentPrompt = getRandom(truths);
  } else if (type === "dare") {
    currentPrompt = getRandom(dares);
  } else {
    currentPrompt = Math.random() > 0.5 ? getRandom(truths) : getRandom(dares);
  }

  return currentPrompt;
}
