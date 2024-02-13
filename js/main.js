function hideElement (element) {
    const hideScreen = document.getElementById(element);
    hideScreen.classList.add('hidden')
}


function showElement (element) {
    const showScreen = document.getElementById(element);
    showScreen.classList.remove('hidden')
}


function play () {
    // Hide The Home Screen.
    hideElement('home')


    //Show the Play Ground Area
    showElement('play-ground')
}

