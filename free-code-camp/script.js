let playerName = document.querySelector(".player-name");
let playerClass = document.querySelector(".player-class");
let languageSelected = document.querySelector(".language");
const btnStart = document.querySelector(".btn-start");

const messageContainer = document.querySelector(".message-container");
const formContainer = document.querySelector(".form-stats-container");
const gameContainer = document.querySelector(".game-container");

const btn1 = document.querySelector(".button1");
const btn2 = document.querySelector(".button2");
const btn3 = document.querySelector(".button3");

function changeLocation(location) {}

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
    buttonsTexts: ["Fight the dragon", "Go to town"],
    buttonsFunctions: [FightDragon, GoTown],
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
    buttonTexts: ["Start over"],
    buttonsFunctions: [StartOver],
  },
  {
    name: "win",
    text: "You have defeated the dragon. You have wined the game.",
    buttonTexts: ["Start over"],
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
