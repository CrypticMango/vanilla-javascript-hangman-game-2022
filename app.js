const aButton = document.getElementById("a");
let phrase = document.getElementById("hangman-phrase");

aButton.addEventListener("click", pressA);

function pressA() {
    if (phrase.innerHTML = "hangman") {
        phrase.style.display = 'block';
    } 
}