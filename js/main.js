function hideElement (element) {
    const hideScreen = document.getElementById(element);
    hideScreen.classList.add('hidden')
}


function showElement (element) {
    const showScreen = document.getElementById(element);
    showScreen.classList.remove('hidden')
}





function getRandomAlphabet () {
    // Create an Alphabet Array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    

    // Get A Random Index 0 to 51
    const randomNumber = Math.random() * 25;
    const randomIndex = Math.round(randomNumber);

    // Get a Random Alphabet
    const alphabet = alphabets[randomIndex];
    return alphabet;
}

// Set Background Color
function setBackgroundColor (element) {
    let letter = document.getElementById(element)
    letter.classList.add('bg-[#FFA500]')
    return letter;
}


// Remove Background Color

function removeBackground (element) {
    const showScreen = document.getElementById(element);
    showScreen.classList.remove('bg-[#FFA500]')
}


// Capture The Key-Board Key Press

document.addEventListener('keyup', function () {

    // Get Presseng Key With Keyboard
    const playerPressed = event.key;

    // Get the Current Key
    const alphabet = document.getElementById('current-alphabet').innerText;
    const currentAlphabet = alphabet.toLowerCase();

    // Check The Current & Player Pressing Are Same or Not
    if (playerPressed === currentAlphabet) {
        removeBackground(currentAlphabet);
        continueGame();
    } 
})


function continueGame () {
    // Step 1 : Generate a Random Alphabet
    const alphabet = getRandomAlphabet();

    // Lower Case Alphabet for Changing Color of Key
    const lowerAlphabet = alphabet.toLowerCase();
    

    // Set Randomly Generated Alphabet to the Screen
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // Set Background Color
    setBackgroundColor(lowerAlphabet)
}


function enterTheGame () {
    // Hide The Home Screen.
    hideElement('home')


    //Show the Play Ground Area
    showElement('play-ground');


    // Start The Game
    continueGame();
}


