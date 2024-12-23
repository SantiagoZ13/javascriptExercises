const playerName = document.querySelector(".player-name");
const playerClass = document.querySelector(".player-class");
const btnStart = document.querySelector(".btn-start");

const messageContainer = document.querySelector(".message-container");
const formContainer = document.querySelector(".form-stats-container");
const gameContainer = document.querySelector(".game-container");

const locations = [
  {
    name: "town square",
    text: "You are in the town square. Where do you want to go?",
  },
  {
    name: "cave",
    text: "You are at the cave. You see monsters. What do you want to do?",
  },
  {
    name: "forest",
    text: "You are at the forest. You see a bear. What do you want to do?",
  },
  {
    name: "magic dungeon",
    text: "You are at the dungeon. You see a dragon. What do you want to do?",
  },
  {
    name: "fight",
    text: "You are fighting the monster. What do you want to do?",
  },
  {
    name: "moster killed",
    text: "You have defeted the moster. You gain experience points and find gold.",
  },
  {
    name: "lose",
    text: "You have been defeated by the monster. Game over.",
  },
  {
    name: "win",
    text: "You have defeated the dragon. You have wined the game.",
  },
];

const monsters = [
  {
    name: "slime",
    damage: 2,
    health: 15,
  },
  {
    name: "goblin",
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
