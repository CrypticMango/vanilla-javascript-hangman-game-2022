//need to create array of words or phrases
//when a letter is pressed, need to search for word in the selected word or phrase
//must be able to detect how many wrong guesses there are
//must display different phases of hangman image
//have a game over screen when lives are used up

let hangmanPhrases = [
	"love",
	"fortnite",
	"apex predator",
	"calisthenics",
	"big brain",
	"furious lion",
	"kittens",
	"basil",
	"homemade pizza",
	"contagious laughter",
];

//function to display random phrase

function randomPhrase(array) {
    //get random index value
    const randomIndex = Math.floor(Math.random() * array.length);
    //get random item in array
    const item = array[randomIndex];

    return item;
}

const result = randomPhrase(hangmanPhrases);
console.log(result);

const currentWord = document.getElementById("hangman-phrase");
const newWordButton = document.getElementById("new-word");

console.log(currentWord);

newWordButton.addEventListener("click", newWord);

function insertPhrase() {
    currentWord.innerHTML = result;
}

function newWord() {
    location.reload();
}

insertPhrase();