let truths = [];
let dares = [];

let remainingTruths = [];
let remainingDares = [];

let currentType = null;

async function loadData() {
  const t = await fetch("./data/truths.json");
  const d = await fetch("./data/dares.json");

  truths = await t.json();
  dares = await d.json();

  resetPools();
}

function resetPools() {
  remainingTruths = [...truths];
  remainingDares = [...dares];
}

function getNext(type) {
  let pool = type === "truth" ? remainingTruths : remainingDares;

  if (pool.length === 0) {
    resetPools();
    pool = type === "truth" ? remainingTruths : remainingDares;
  }

  const index = Math.floor(Math.random() * pool.length);
  const item = pool[index];

  pool.splice(index, 1);

  return item;
}
