let playerName = document.querySelector(".player-name");
let playerClass = document.querySelector(".player-class");
const btnStart = document.querySelector(".btn-start");

let messageContainer = document.querySelector(".message-container");
const formContainer = document.querySelector(".form-stats-container");
const gameContainer = document.querySelector(".game-container");

let btn1 = document.querySelector(".button1");
let btn2 = document.querySelector(".button2");
let btn3 = document.querySelector(".button3");

btn1.onclick = GoStore;
btn2.onclick = GoCave;
btn3.onclick = GoExplore;

const locations = [
  {
    name: "town square",
    text: "You are in the town square. Where do you want to go?",
    buttonsTexts: ["Go to store", "Go to cave", "Go to explore"],
    buttonsFunctions: [GoStore, GoCave, GoExplore],
  },
  {
    name: "cave",
    text: "You are at the cave. You see monsters. What do you want to do?",
    buttonsTexts: ["Fight the slime", "Fight the fanged beast", "Go to town"],
    buttonsFunctions: [FightSlime, FightFangedBest, GoTown],
  },
  {
    name: "explore",
    text: "You are exploring and find this locaions. What do you want to do?",
    buttonsTexts: ["Go to forest", "Go to magic dungeon", "Go to town"],
    buttonsFunctions: [GoForest, GoMagicDungeon, GoTown],
  },
  {
    name: "forest",
    text: "You are at the forest. You see a bear. What do you want to do?",
    buttonsTexts: ["Fight the bear", "Fight the demon", "Go to town"],
    buttonsFunctions: [FightBear, FightDemon, GoTown],
  },
  {
    name: "magic dungeon",
    text: "You are at the dungeon. You see a dragon. What do you want to do?",
    buttonsTexts: ["FightDarkMage", "Fight the dragon", "Go to town"],
    buttonsFunctions: [FightDarkMage, FightDragon, GoTown],
  },
  {
    name: "fight",
    text: "You are fighting the monster. What do you want to do?",
    buttonsTexts: ["Attack", "Dodge", "Run"],
    buttonsFunctions: [Attack, Dodge, Run],
  },
  {
    name: "moster killed",
    text: "You have defeted the moster. You gain experience points and find gold.",
    buttonsTexts: ["Go to town", "Go to explore"],
    buttonsFunctions: [GoTown, GoExplore],
  },
  {
    name: "lose",
    text: "You have been defeated by the monster. Game over.",
    buttonsTexts: ["Start over"],
    buttonsFunctions: [StartOver],
  },
  {
    name: "win",
    text: "You have defeated the dragon. You have wined the game.",
    buttonsTexts: ["Start over"],
    buttonsFunctions: [StartOver],
  },
];

const monsters = [
  {
    name: "slime",
    damage: 2,
    health: 15,
  },
  {
    name: "bear",
    damage: 4,
    health: 20,
  },
  {
    name: "fanged beast",
    damage: 8,
    health: 40,
  },
  {
    name: "fear demon",
    damage: 16,
    health: 80,
  },
  {
    name: "dragon",
    damage: 28,
    health: 300,
  },
];

btnStart.addEventListener("click", () => {
  if (playerName.value === "" || playerClass.value === "") {
    alert("Please fill in all fields!");
  } else {
    formContainer.style.display = "none";
    gameContainer.style.display = "flex";
    messageContainer.innerHTML = `Welcome, ${playerName.value} the ${playerClass.value}. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.`;
  }
});

function changeLocation(location) {
  locationSelected = locations[location];
  messageContainer.innerHTML = locationSelected.text;
  btn1.innerHTML = locationSelected.buttonsTexts[0];
  btn2.innerHTML = locationSelected.buttonsTexts[1];
  btn3.innerHTML = locationSelected.buttonsTexts[2];
  btn1.onclick = locationSelected.buttonsFunctions[0];
  btn2.onclick = locationSelected.buttonsFunctions[1];
  btn3.onclick = locationSelected.buttonsFunctions[2];
}
function GoStore() {
  changeLocation(0);
}
function GoCave() {
  changeLocation(1);
}
function GoExplore() {
  changeLocation(2);
}
function GoTown() {
  changeLocation(0);
}
function GoForest() {
  changeLocation(3);
}
function GoMagicDungeon() {
  changeLocation(4);
}
function FightSlime() {}
function FightFangedBest() {}
function FightDragon() {}
function FightDemon() {}
function FightBear() {}
function FightDarkMage() {}
function Attack() {}
function Dodge() {}
function Run() {}
function StartOver() {}
