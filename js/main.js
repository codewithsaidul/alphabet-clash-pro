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
    const alphabetString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabets = alphabetString.split('');
    

    // Get A Random Index 0 to 51
    const randomNumber = Math.random() * 51;
    const randomIndex = Math.round(randomNumber);

    // Get a Random Alphabet
    const alphabet = alphabets[randomIndex];
    return alphabet;
}


function startGame () {
    // Step 1 : Generate a Random Alphabet
    getRandomAlphabet();
}


function enterTheGame () {
    // Hide The Home Screen.
    hideElement('home')


    //Show the Play Ground Area
    showElement('play-ground');


    // Start The Game
    startGame();
}



