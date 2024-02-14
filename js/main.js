function hideElement(element) {
  const hideScreen = document.getElementById(element);
  hideScreen.classList.add("hidden");
}

function showElement(element) {
  const showScreen = document.getElementById(element);
  showScreen.classList.remove("hidden");
}


function getTextElement (elementById) {
    const element = document.getElementById(elementById);
    const text = element.innerText;
    return text;
}

function getRandomAlphabet() {
  // Create an Alphabet Array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  // Get A Random Index 0 to 51
  const randomNumber = Math.random() * 25;
  const randomIndex = Math.round(randomNumber);

  // Get a Random Alphabet
  const alphabet = alphabets[randomIndex];
  return alphabet;
}

// Set Background Color
function setBackgroundColor(element) {
  let letter = document.getElementById(element);
  letter.classList.add("bg-[#FFA500]");
  return letter;
}

// Remove Background Color

function removeBackground(element) {
  const showScreen = document.getElementById(element);
  showScreen.classList.remove("bg-[#FFA500]");
}

// Get Life & Score

function lifeScore(element) {
  const elements = document.getElementById(element);
  const elementText = elements.innerText;
  const value = parseInt(elementText);

  return value;
}

// set teh score & life line
function setLifeScore(elementById, value) {
  const element = document.getElementById(elementById);
  element.innerText = value;
}
// Capture The Key-Board Key Press

document.addEventListener("keyup", function () {
  // Get Presseng Key With Keyboard
  const playerPressed = event.key;


  // If Player Pressed Escepd Button then Quit The Game
  if (playerPressed === "Escape") {
    gameOver();
  }
  // Get the Current Key
  const alphabet = document.getElementById("current-alphabet").innerText;
  const currentAlphabet = alphabet.toLowerCase();

  // Check The Current & Player Pressing Are Same or Not
  if (playerPressed === currentAlphabet) {
    const currentScore = lifeScore("current-score");

    // 2. Incresse the Score by 1
    const newScore = currentScore + 1;

    // 3. Show the upadeted score
    setLifeScore("current-score", newScore);

    // Start A New Round
    removeBackground(currentAlphabet);
    continueGame();
  } else {
    //Update Life Line
    // 1. Get the Current Life Line
    const currentLifeScore = lifeScore("current-life");

    // 2. Decresse the Life Line by 1
    const newLifeLine = currentLifeScore - 1;
    // console.log(newLifeLine)

    // 3. Show the upadeted Life Line
    setLifeScore("current-life", newLifeLine);

    if (newLifeLine === 0) {
      gameOver();
    }
  }
});

function continueGame() {
  // Step 1 : Generate a Random Alphabet
  const alphabet = getRandomAlphabet();

  // Lower Case Alphabet for Changing Color of Key
  const lowerAlphabet = alphabet.toLowerCase();

  // Set Randomly Generated Alphabet to the Screen
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;

  // Set Background Color
  setBackgroundColor(lowerAlphabet);
}

function enterTheGame() {

  // Hide to the Everything & Show the only Playground
  hideElement("home");
  hideElement('game-score')
  showElement("play-ground");



  // Start New Round Game
  continueGame();



  //Reset Current Score & Life Line

  setLifeScore('current-life', 5);
  setLifeScore('current-score', 0);

  
}

//Game over
function gameOver() {
  hideElement("play-ground");

  showElement("game-score");

  //Update Score

  // 1. Get the final score
  const finalScore = lifeScore('current-score');
  setLifeScore('final-score', finalScore)


  // Clear the last seleted element
  const currentAlphabet = getTextElement('current-alphabet');
  removeBackground(currentAlphabet)
//   console.log(currentAlphabet)
}
