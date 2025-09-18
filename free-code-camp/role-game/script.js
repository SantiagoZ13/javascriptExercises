let playerName = document.querySelector(".player-name");
let playerClass = document.querySelector(".player-class");
let health = 100;
let gold = 500;
let xp = 0;
let inventory = ["stick"];
let currentWeaponIndex = 0;
let fighting;
let enemyName = document.querySelector(".enemy-name");
let enemyHealth = document.querySelector(".enemy-health");

const btnStart = document.querySelector(".btn-start");
const xpText = document.querySelector(".xp-stat");
const healthText = document.querySelector(".health-stat");
const goldText = document.querySelector(".gold-stat");
const enemyStats = document.querySelector(".enemy-stats");

let weapons = [
  { name: "stick", power: 5 },
  { name: "dagger", power: 30 },
  { name: "sword", power: 50 },
  { name: "sacred sword", power: 100 },
];
let messageContainer = document.querySelector(".message-container");
const formContainer = document.querySelector(".form-stats-container");
const gameContainer = document.querySelector(".game-container");

let btn1 = document.querySelector(".button1");
let btn2 = document.querySelector(".button2");
let btn3 = document.querySelector(".button3");

btnStart.addEventListener("click", () => {
  if (playerName.value === "" || playerClass.value === "") {
    alert("Please fill in all fields!");
  } else {
    formContainer.style.display = "none";
    gameContainer.style.display = "flex";
    messageContainer.innerHTML = `Welcome, ${playerName.value} the ${playerClass.value}. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.`;
    if (playerClass.value === "warrior") {
      weapons = [
        { name: "stick", power: 5 },
        { name: "dagger", power: 30 },
        { name: "sword", power: 50 },
        { name: "sacred sword", power: 100 },
      ];
    } else if (playerClass.value === "archer") {
      weapons = [
        { name: "stick", power: 5 },
        { name: "bow", power: 30 },
        { name: "crossbow", power: 50 },
        { name: "magic bow", power: 100 },
      ];
    } else {
      weapons = [
        { name: "stick", power: 5 },
        { name: "basic scepter", power: 30 },
        { name: "arcane staff", power: 50 },
        { name: "ancient spellbook", power: 100 },
      ];
    }
  }
});

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
    name: "store",
    text: "You are at store. You can buy new weapons or health potions",
    buttonsTexts: [
      "Buy new weapon (30 gold)",
      "Buy health potion (10 gold)",
      "Go to town",
    ],
    buttonsFunctions: [BuyWeapon, BuyHealth, GoTown],
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
    buttonsTexts: ["Fight the bear", "Fight the wizard", "Go to town"],
    buttonsFunctions: [FightBear, FightWizard, GoTown],
  },
  {
    name: "magic dungeon",
    text: "You are at the dungeon. You see a dragon. What do you want to do?",
    buttonsTexts: ["Fight the demon", "Fight the dragon", "Go to town"],
    buttonsFunctions: [FightDemon, FightDragon, GoTown],
  },
  {
    name: "fight",
    text: "You are fighting the monster. What do you want to do?",
    buttonsTexts: ["Attack", "Dodge", "Run"],
    buttonsFunctions: [Attack, Dodge, GoTown],
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
    name: "Slime",
    damage: 2,
    health: 15,
  },
  {
    name: "Fanged Beast",
    damage: 4,
    health: 25,
  },
  {
    name: "Bear",
    damage: 8,
    health: 40,
  },
  {
    name: "Dark Wizard",
    damage: 10,
    health: 60,
  },
  {
    name: "Fear Demon",
    damage: 20,
    health: 90,
  },
  {
    name: "Dragon",
    damage: 28,
    health: 300,
  },
];

function changeLocation(location) {
  enemyStats.style.display = "none";
  locationSelected = locations[location];
  messageContainer.innerText = locationSelected.text;
  btn1.innerText = locationSelected.buttonsTexts[0];
  btn2.innerText = locationSelected.buttonsTexts[1];
  btn3.innerText = locationSelected.buttonsTexts[2];
  btn1.onclick = locationSelected.buttonsFunctions[0];
  btn2.onclick = locationSelected.buttonsFunctions[1];
  btn3.onclick = locationSelected.buttonsFunctions[2];
}
function GoTown() {
  changeLocation(0);
}
function GoStore() {
  changeLocation(1);
}
function GoCave() {
  changeLocation(2);
}
function GoExplore() {
  changeLocation(3);
}
function GoForest() {
  changeLocation(4);
}
function GoMagicDungeon() {
  changeLocation(5);
}

function BuyWeapon() {
  if (currentWeaponIndex < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeaponIndex += 1;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeaponIndex].name;
      inventory.push(newWeapon);
      messageContainer.innerText =
        "You bougth a " +
        newWeapon +
        ". In your inventory you have " +
        inventory;
    } else {
      messageContainer.innerText =
        "You don't have enough money to buy a new weapon";
    }
  } else {
    messageContainer.innerText = "You already have the most powerfull weapon!";
    btn1.innerText = "Sell weapon for 15 gold";
    btn1.onclick = sellWeapon;
  }
}

const sellWeapon = () => {
  if (currentWeaponIndex > 0) {
    currentWeaponIndex--;
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.pop();
    messageContainer.innerText = "You have sold your " + currentWeapon;
    messageContainer.innerText += ". In your inventory you have: " + inventory;
  } else {
    messageContainer.innerText = "Don't sell your only weapon";
  }
};

function BuyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    messageContainer.innerText =
      "You don't have enough money to buy more life potions";
  }
}

function goFight() {
  changeLocation(6);
  enemyStats.style.display = "flex";
  enemyName.innerText = monsters[fighting].name;
  enemyHealth.innerText = monsters[fighting].health;
}

function FightSlime() {
  fighting = 0;
  goFight();
}

function FightFangedBest() {
  fighting = 1;
  goFight();
}
function FightDragon() {
  fighting = 5;
  goFight();
}
function FightDemon() {
  fighting = 4;
  goFight();
}
function FightBear() {
  fighting = 2;
  goFight();
}
function FightWizard() {
  fighting = 3;
  goFight();
}
function Attack() {}
function Dodge() {}
function Run() {}
function StartOver() {}
