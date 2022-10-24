//when correct letter is pressed place letter in answer line
//must display different phases of hangman image
//have a game over screen when lives are used up
//if player uses up all lives display the answer in game over screen
//add timer?
//add scoreboard

//5 lives variables

let lives = 5;
let livesWord = "Lives: "
let livesDisplay = document.getElementById('five-lives');


//hangman phrases array

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
	"laughter",
    "sweet baby",
	"pringles",
	"plant lover",
	"ragdoll",
	"vampire",
	"xbox is best",
	"canada",
	"united kingdom",
	"longboarding",
	"millions"
];

//function to display random phrase

function randomPhrase(array) {
	//get random index value
	const randomIndex = Math.floor(Math.random() * array.length);
	//get random item in array
	const item = array[randomIndex];

	return item;
}

let result = randomPhrase(hangmanPhrases);
let hiddenResult = result.replace(/[a-z]/g, "-");
console.log(result);
console.log(hiddenResult);

const currentWord = document.getElementById("hangman-phrase");
const newWordButton = document.getElementById("new-word");

console.log(currentWord);

newWordButton.addEventListener("click", newWord);

function insertPhrase() {
	currentWord.innerHTML = hiddenResult;
}

function newWord() {
	location.reload();
}

insertPhrase();

//array of letters
let alphabet = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];



//functions to check to see if a letter is in a phrase

//letter a
function checkLetterA() {
	if (result.includes("a")) {
		document.getElementById('a').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('a').style.backgroundColor = '#FF0000';
		return false;
	}
}

let aButton = document.getElementById("a");
aButton.addEventListener("click", checkLetterA);
aButton.addEventListener("click", checkLivesA);

function checkLivesA() {
	if (checkLetterA() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}

//letter b
function checkLetterB() {
	if (result.includes("b")) {
		document.getElementById('b').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('b').style.backgroundColor = '#FF0000';
		return false;
	}
}

let bButton = document.getElementById("b");
bButton.addEventListener("click", checkLetterB);
bButton.addEventListener("click", checkLivesB);

function checkLivesB() {
	if (checkLetterB() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}

//letter c
function checkLetterC() {
	if (result.includes("c")) {
		document.getElementById('c').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('c').style.backgroundColor = '#FF0000';
		return false;
	}
}

let cButton = document.getElementById("c");
cButton.addEventListener("click", checkLetterC);
cButton.addEventListener("click", checkLivesC);

function checkLivesC() {
	if (checkLetterC() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}

//letter d
function checkLetterD() {
	if (result.includes("d")) {
		document.getElementById('d').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('d').style.backgroundColor = '#FF0000';
		return false;
	}
}

let dButton = document.getElementById("d");
dButton.addEventListener("click", checkLetterD);
dButton.addEventListener("click", checkLivesD);

function checkLivesD() {
	if (checkLetterD() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}


//letter e
function checkLetterE() {
	if (result.includes("e")) {
		document.getElementById('e').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('e').style.backgroundColor = '#FF0000';
		return false;
	}
}

let eButton = document.getElementById("e");
eButton.addEventListener("click", checkLetterE);
eButton.addEventListener("click", checkLivesE);

function checkLivesE() {
	if (checkLetterE() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}


//letter f
function checkLetterF() {
	if (result.includes("f")) {
		document.getElementById('f').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('f').style.backgroundColor = '#FF0000';
		return false;
	}
}

let fButton = document.getElementById("f");
fButton.addEventListener("click", checkLetterF);
fButton.addEventListener("click", checkLivesF);

function checkLivesF() {
	if (checkLetterF() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}


//letter g
function checkLetterG() {
	if (result.includes("g")) {
		document.getElementById('g').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('g').style.backgroundColor = '#FF0000';
		return false;
	}
}

let gButton = document.getElementById("g");
gButton.addEventListener("click", checkLetterG);
gButton.addEventListener("click", checkLivesG);

function checkLivesG() {
	if (checkLetterG() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}


//letter h
function checkLetterH() {
	if (result.includes("h")) {
		document.getElementById('h').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('h').style.backgroundColor = '#FF0000';
		return false;
	}
}

let hButton = document.getElementById("h");
hButton.addEventListener("click", checkLetterH);
hButton.addEventListener("click", checkLivesH);

function checkLivesH() {
	if (checkLetterH() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}


//letter i
function checkLetterI() {
	if (result.includes("i")) {
		document.getElementById('i').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('i').style.backgroundColor = '#FF0000';
		return false;
	}
}

let iButton = document.getElementById("i");
iButton.addEventListener("click", checkLetterI);
iButton.addEventListener("click", checkLivesI);

function checkLivesI() {
	if (checkLetterI() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}


//letter j
function checkLetterJ() {
	if (result.includes("j")) {
		document.getElementById('j').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('j').style.backgroundColor = '#FF0000';
		return false;
	}
}

let jButton = document.getElementById("j");
jButton.addEventListener("click", checkLetterJ);
jButton.addEventListener("click", checkLivesJ);

function checkLivesJ() {
	if (checkLetterJ() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}


//letter k
function checkLetterK() {
	if (result.includes("k")) {
		document.getElementById('k').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('k').style.backgroundColor = '#FF0000';
		return false;
	}
}

let kButton = document.getElementById("k");
kButton.addEventListener("click", checkLetterK);
kButton.addEventListener("click", checkLivesK);

function checkLivesK() {
	if (checkLetterK() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}

//letter l
function checkLetterL() {
	if (result.includes("l")) {
		document.getElementById('l').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('l').style.backgroundColor = '#FF0000';
		return false;
	}
}

let lButton = document.getElementById("l");
lButton.addEventListener("click", checkLetterL);
lButton.addEventListener("click", checkLivesL);

function checkLivesL() {
	if (checkLetterL() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}

//letter m
function checkLetterM() {
	if (result.includes("m")) {
		document.getElementById('m').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('m').style.backgroundColor = '#FF0000';
		return false;
}
}

let mButton = document.getElementById("m");
mButton.addEventListener("click", checkLetterM);
mButton.addEventListener("click", checkLivesM);

function checkLivesM() {
	if (checkLetterM() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}

//letter n
function checkLetterN() {
	if (result.includes("n")) {
		document.getElementById('n').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('n').style.backgroundColor = '#FF0000';
		return false;
	}
}

let nButton = document.getElementById("n");
nButton.addEventListener("click", checkLetterN);
nButton.addEventListener("click", checkLivesN);

function checkLivesN() {
	if (checkLetterN() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}

//letter o
function checkLetterO() {
	if (result.includes("o")) {
		document.getElementById('o').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('o').style.backgroundColor = '#FF0000';
		return false;
	}
}

let oButton = document.getElementById("o");
oButton.addEventListener("click", checkLetterO);
oButton.addEventListener("click", checkLivesO);

function checkLivesO() {
	if (checkLetterO() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}

//letter p
function checkLetterP() {
	if (result.includes("p")) {
		document.getElementById('p').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('p').style.backgroundColor = '#FF0000';
		return false;
	}
}

let pButton = document.getElementById("p");
pButton.addEventListener("click", checkLetterP);
pButton.addEventListener("click", checkLivesP);

function checkLivesP() {
	if (checkLetterP() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}

//letter q
function checkLetterQ() {
	if (result.includes("q")) {
		document.getElementById('q').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('q').style.backgroundColor = '#FF0000';
		return false;
	}
}

let qButton = document.getElementById("q");
qButton.addEventListener("click", checkLetterQ);
qButton.addEventListener("click", checkLivesQ);

function checkLivesQ() {
	if (checkLetterQ() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}

//letter r
function checkLetterR() {
	if (result.includes("r")) {
		document.getElementById('r').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('r').style.backgroundColor = '#FF0000';
		return false;
	}
}

let rButton = document.getElementById("r");
rButton.addEventListener("click", checkLetterR);
rButton.addEventListener("click", checkLivesR);

function checkLivesR() {
	if (checkLetterR() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}

//letter s
function checkLetterS() {
	if (result.includes("s")) {
		document.getElementById('s').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('s').style.backgroundColor = '#FF0000';
		return false;
	}
}

let sButton = document.getElementById("s");
sButton.addEventListener("click", checkLetterS);
sButton.addEventListener("click", checkLivesS);

function checkLivesS() {
	if (checkLetterS() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}

//letter t
function checkLetterT() {
	if (result.includes("t")) {
		document.getElementById('t').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('t').style.backgroundColor = '#FF0000';
		return false;
	}
}

let tButton = document.getElementById("t");
tButton.addEventListener("click", checkLetterT);
tButton.addEventListener("click", checkLivesT);

function checkLivesT() {
	if (checkLetterT() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}

//letter u
function checkLetterU() {
	if (result.includes("u")) {
		document.getElementById('u').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('u').style.backgroundColor = '#FF0000';
		return false;
	}
}

let uButton = document.getElementById("u");
uButton.addEventListener("click", checkLetterU);
uButton.addEventListener("click", checkLivesU);

function checkLivesU() {
	if (checkLetterU() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}

//letter v
function checkLetterV() {
	if (result.includes("v")) {
		document.getElementById('v').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('v').style.backgroundColor = '#FF0000';
		return false;
	}
}

let vButton = document.getElementById("v");
vButton.addEventListener("click", checkLetterV);
vButton.addEventListener("click", checkLivesV);

function checkLivesV() {
	if (checkLetterV() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}

//letter w
function checkLetterW() {
	if (result.includes("w")) {
		document.getElementById('w').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('w').style.backgroundColor = '#FF0000';
		return false;
	}
}

let wButton = document.getElementById("w");
wButton.addEventListener("click", checkLetterW);
wButton.addEventListener("click", checkLivesW);

function checkLivesW() {
	if (checkLetterW() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}

//letter x
function checkLetterX() {
	if (result.includes("x")) {
		document.getElementById('x').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('x').style.backgroundColor = '#FF0000';
		return false;
	}
}

let xButton = document.getElementById("x");
xButton.addEventListener("click", checkLetterX);
xButton.addEventListener("click", checkLivesX);

function checkLivesX() {
	if (checkLetterX() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}

//letter y
function checkLetterY() {
	if (result.includes("y")) {
		document.getElementById('y').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('y').style.backgroundColor = '#FF0000';
		return false;
	}
}

let yButton = document.getElementById("y");
yButton.addEventListener("click", checkLetterY);
yButton.addEventListener("click", checkLivesY);

function checkLivesY() {
	if (checkLetterY() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}

//letter z
function checkLetterZ() {
	if (result.includes("z")) {
		document.getElementById('z').style.backgroundColor = '#00FF00';
		return true;
	} else {
		document.getElementById('z').style.backgroundColor = '#FF0000';
		return false;
	}
}

let zButton = document.getElementById("z");
zButton.addEventListener("click", checkLetterZ);
zButton.addEventListener("click", checkLivesZ);

function checkLivesZ() {
	if (checkLetterZ() === false) {
		lives--;
		livesDisplay.innerHTML = livesWord + lives;
	} else {
		null;
	}
}

livesDisplay.innerHTML = livesWord + lives;

//game over screen

function gameOver() {
	if (lives === 0) {
		alert("Game Over! You ran out of lives.");
		location.reload();
	}
}

gameOver();

let gameOverButton = document.getElementById("game-over");
gameOverButton.addEventListener("click", gameOverScreen);

function gameOverScreen() {
	location.href = "gameover.html";
}

console.log(livesDisplay.innerHTML);
console.log(lives);