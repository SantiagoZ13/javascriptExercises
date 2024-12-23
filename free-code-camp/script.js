let playerName = document.querySelector(".player-name");
let playerClass = document.querySelector(".player-class");
let btnStart = document.querySelector(".btn-start");

let messageContainer = document.querySelector(".message-container");
let formContainer = document.querySelector(".form-stats-container");
let gameContainer = document.querySelector(".game-container");

btnStart.addEventListener("click", () => {
  if (playerName.value === "" || playerClass.value === "") {
    alert("Please fill in all fields!");
  } else {
    formContainer.style.display = "none";
    gameContainer.style.display = "flex";
    messageContainer.innerHTML = `Welcome, ${playerName.value} the ${playerClass.value}. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.`;
  }
});
