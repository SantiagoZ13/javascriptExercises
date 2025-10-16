const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const calorieCounter = document.getElementById("calorie-counter");
const calculateCaloriesButton = document.getElementById(
  "calculate-calories-btn"
);
const budgetNumberInput = document.getElementById("budget");
const output = document.getElementById("output");
const clearButton = document.getElementById("clear");

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}

function isValidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

function addEntry() {
  const targetInputContainer = document.querySelector(
    `#${entryDropdown.value} .input-container`
  );
  const entryNumber =
    targetInputContainer.querySelectorAll("input[type='text']").length + 1;
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input id="${entryDropdown.value}-${entryNumber}-name" type="text" placeholder="Name"></input>
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input id="${entryDropdown.value}-${entryNumber}-calories" min="0" type="number" placeholder="Calories"></input>
    <br><br>
    `;
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

function calculateCalories(e) {
  e.preventDefault();
  isError = false;

  const breakfastNumberInputs = document.querySelectorAll(
    `#breakfast input[type="number"]`
  );
  const lunchNumberInputs = document.querySelectorAll(
    `#lunch input[type="number"]`
  );
  const dinnerNumberInputs = document.querySelectorAll(
    `#dinner input[type="number"]`
  );
  const snacksNumberInputs = document.querySelectorAll(
    `#snacks input[type="number"]`
  );
  const exerciseNumberInputs = document.querySelectorAll(
    `#exercise input[type="number"]`
  );

  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
  const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

  if (isError) {
    return;
  }

  const consumedCalories =
    breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
  const remainigCalories = budgetCalories - consumedCalories + exerciseCalories;
  const surplusOrDeficit = remainigCalories < 0 ? "Surplus" : "Deficit";

  output.innerHTML = `
  <span class=${surplusOrDeficit.toLowerCase()}>${Math.abs(
    remainigCalories
  )} Calories ${surplusOrDeficit}</span>
  <hr>
  <p>${budgetCalories} Calories Budgeted</p>
  <p>${consumedCalories} Calories consumed</p>
  <p>${exerciseCalories} Calories Burned</p>
  `;
  output.classList.remove("hide");
}

function getCaloriesFromInputs(list) {
  let calories = 0;
  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const isInvalidInput = isValidInput(currVal);
    if (isInvalidInput) {
      alert(`Invalid Input: ${isInvalidInput[0]}`);
      isError = true;
      return null;
    }
    calories += Number(currVal);
  }
  return calories;
}

function clear() {
  const inputContainers = document.querySelectorAll(".input-container");
  for (const input of inputContainers) {
    input.innerText = "";
  }
  budgetNumberInput.value = "";
  output.innerText = "";
  output.classList.add("hide");
}

addEntryButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit", calculateCalories);
clearButton.addEventListener("click", clear);
