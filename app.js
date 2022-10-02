//when correct letter is pressed place letter in answer line
//must be able to detect how many wrong guesses there are
//must display different phases of hangman image
//have a game over screen when lives are used up
//if player uses up all lives display the answer in game over screen
//add timer
//add scoreboard
//have a guess tracker

let lives = 5;

function guessTracker() {
	
}

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

const result = randomPhrase(hangmanPhrases);
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
let letters = [
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
		alert("yes! the letter a is in this word");
		document.getElementById('a').style.backgroundColor = '#00FF00';
		hiddenResult = result.replace(/"-"/g, "a");
		currentWord.innerHTML = hiddenResult;
		
	} else {
		alert("letter a is not in word");
		document.getElementById('a').style.backgroundColor = '#FF0000';
	}
}

let aButton = document.getElementById("a");
aButton.addEventListener("click", checkLetterA);

//letter b
function checkLetterB() {
	if (result.includes("b")) {
		alert("yes! the b letter is in this word");
		document.getElementById('b').style.backgroundColor = '#00FF00';
	} else {
		alert("letter b is not in word");
		document.getElementById('b').style.backgroundColor = '#FF0000';
	}
}

let bButton = document.getElementById("b");
bButton.addEventListener("click", checkLetterB);

//letter c
function checkLetterC() {
	if (result.includes("c")) {
		alert("yes! the c letter is in this word");
		document.getElementById('c').style.backgroundColor = '#00FF00';
	} else {
		alert("letter c is not in word");
		document.getElementById('c').style.backgroundColor = '#FF0000';
	}
}

let cButton = document.getElementById("c");
cButton.addEventListener("click", checkLetterC);

//letter d
function checkLetterD() {
	if (result.includes("d")) {
		alert("yes! the d letter is in this word");
		document.getElementById('d').style.backgroundColor = '#00FF00';
	} else {
		alert("letter d is not in word");
		document.getElementById('d').style.backgroundColor = '#FF0000';
	}
}

let dButton = document.getElementById("d");
dButton.addEventListener("click", checkLetterD);

//letter e
function checkLetterE() {
	if (result.includes("e")) {
		alert("yes! the e letter is in this word");
		document.getElementById('e').style.backgroundColor = '#00FF00';
	} else {
		alert("letter e is not in word");
		document.getElementById('e').style.backgroundColor = '#FF0000';
	}
}

let eButton = document.getElementById("e");
eButton.addEventListener("click", checkLetterE);

//letter f
function checkLetterF() {
	if (result.includes("f")) {
		alert("yes! the f letter is in this word");
		document.getElementById('f').style.backgroundColor = '#00FF00';
	} else {
		alert("letter f is not in word");
		document.getElementById('f').style.backgroundColor = '#FF0000';
	}
}

let fButton = document.getElementById("f");
fButton.addEventListener("click", checkLetterF);

//letter g
function checkLetterG() {
	if (result.includes("g")) {
		alert("yes! the g letter is in this word");
		document.getElementById('g').style.backgroundColor = '#00FF00';
	} else {
		alert("letter g is not in word");
		document.getElementById('g').style.backgroundColor = '#FF0000';
	}
}

let gButton = document.getElementById("g");
gButton.addEventListener("click", checkLetterG);

//letter h
function checkLetterH() {
	if (result.includes("h")) {
		alert("yes! the h letter is in this word");
		document.getElementById('h').style.backgroundColor = '#00FF00';
	} else {
		alert("letter h is not in word");
		document.getElementById('h').style.backgroundColor = '#FF0000';
	}
}

let hButton = document.getElementById("h");
hButton.addEventListener("click", checkLetterH);

//letter i
function checkLetterI() {
	if (result.includes("i")) {
		alert("yes! the i letter is in this word");
		document.getElementById('i').style.backgroundColor = '#00FF00';
	} else {
		alert("letter i is not in word");
		document.getElementById('i').style.backgroundColor = '#FF0000';
	}
}

let iButton = document.getElementById("i");
iButton.addEventListener("click", checkLetterI);

//letter j
function checkLetterJ() {
	if (result.includes("j")) {
		alert("yes! the j letter is in this word");
		document.getElementById('j').style.backgroundColor = '#00FF00';
	} else {
		alert("letter j is not in word");
		document.getElementById('j').style.backgroundColor = '#FF0000';
	}
}

let jButton = document.getElementById("j");
jButton.addEventListener("click", checkLetterJ);

//letter k
function checkLetterK() {
	if (result.includes("k")) {
		alert("yes! the k letter is in this word");
		document.getElementById('k').style.backgroundColor = '#00FF00';
	} else {
		alert("letter k is not in word");
		document.getElementById('k').style.backgroundColor = '#FF0000';
	}
}

let kButton = document.getElementById("k");
kButton.addEventListener("click", checkLetterK);

//letter l
function checkLetterL() {
	if (result.includes("l")) {
		alert("yes! the l letter is in this word");
		document.getElementById('l').style.backgroundColor = '#00FF00';
	} else {
		alert("letter l is not in word");
		document.getElementById('l').style.backgroundColor = '#FF0000';
	}
}

let lButton = document.getElementById("l");
lButton.addEventListener("click", checkLetterL);

//letter m
function checkLetterM() {
	if (result.includes("m")) {
		alert("yes! the m letter is in this word");
		document.getElementById('m').style.backgroundColor = '#00FF00';
	} else {
		alert("letter m is not in word");
		document.getElementById('m').style.backgroundColor = '#FF0000';
	}
}

let mButton = document.getElementById("m");
mButton.addEventListener("click", checkLetterM);

//letter n
function checkLetterN() {
	if (result.includes("n")) {
		alert("yes! the n letter is in this word");
		document.getElementById('n').style.backgroundColor = '#00FF00';
	} else {
		alert("letter n is not in word");
		document.getElementById('n').style.backgroundColor = '#FF0000';
	}
}

let nButton = document.getElementById("n");
nButton.addEventListener("click", checkLetterN);

//letter o
function checkLetterO() {
	if (result.includes("o")) {
		alert("yes! the o letter is in this word");
		document.getElementById('o').style.backgroundColor = '#00FF00';
	} else {
		alert("letter o is not in word");
		document.getElementById('o').style.backgroundColor = '#FF0000';
	}
}

let oButton = document.getElementById("o");
oButton.addEventListener("click", checkLetterO);

//letter p
function checkLetterP() {
	if (result.includes("p")) {
		alert("yes! the p letter is in this word");
		document.getElementById('p').style.backgroundColor = '#00FF00';
	} else {
		alert("letter p is not in word");
		document.getElementById('p').style.backgroundColor = '#FF0000';
	}
}

let pButton = document.getElementById("p");
pButton.addEventListener("click", checkLetterP);

//letter q
function checkLetterQ() {
	if (result.includes("q")) {
		alert("yes! the q letter is in this word");
		document.getElementById('q').style.backgroundColor = '#00FF00';
	} else {
		alert("letter q is not in word");
		document.getElementById('q').style.backgroundColor = '#FF0000';
	}
}

let qButton = document.getElementById("q");
qButton.addEventListener("click", checkLetterQ);

//letter r
function checkLetterR() {
	if (result.includes("r")) {
		alert("yes! the r letter is in this word");
		document.getElementById('r').style.backgroundColor = '#00FF00';
	} else {
		alert("letter r is not in word");
		document.getElementById('r').style.backgroundColor = '#FF0000';
	}
}

let rButton = document.getElementById("r");
rButton.addEventListener("click", checkLetterR);

//letter s
function checkLetterS() {
	if (result.includes("s")) {
		alert("yes! the s letter is in this word");
		document.getElementById('s').style.backgroundColor = '#00FF00';
	} else {
		alert("letter s is not in word");
		document.getElementById('s').style.backgroundColor = '#FF0000';
	}
}

let sButton = document.getElementById("s");
sButton.addEventListener("click", checkLetterS);

//letter t
function checkLetterT() {
	if (result.includes("t")) {
		alert("yes! the t letter is in this word");
		document.getElementById('t').style.backgroundColor = '#00FF00';
	} else {
		alert("letter t is not in word");
		document.getElementById('t').style.backgroundColor = '#FF0000';
	}
}

let tButton = document.getElementById("t");
tButton.addEventListener("click", checkLetterT);

//letter u
function checkLetterU() {
	if (result.includes("u")) {
		alert("yes! the u letter is in this word");
		document.getElementById('u').style.backgroundColor = '#00FF00';
	} else {
		alert("letter u is not in word");
		document.getElementById('u').style.backgroundColor = '#FF0000';
	}
}

let uButton = document.getElementById("u");
uButton.addEventListener("click", checkLetterU);

//letter v
function checkLetterV() {
	if (result.includes("v")) {
		alert("yes! the v letter is in this word");
		document.getElementById('v').style.backgroundColor = '#00FF00';
	} else {
		alert("letter v is not in word");
		document.getElementById('v').style.backgroundColor = '#FF0000';
	}
}

let vButton = document.getElementById("v");
vButton.addEventListener("click", checkLetterV);

//letter w
function checkLetterW() {
	if (result.includes("w")) {
		alert("yes! the w letter is in this word");
		document.getElementById('w').style.backgroundColor = '#00FF00';
	} else {
		alert("letter w is not in word");
		document.getElementById('w').style.backgroundColor = '#FF0000';
	}
}

let wButton = document.getElementById("w");
wButton.addEventListener("click", checkLetterW);

//letter x
function checkLetterX() {
	if (result.includes("x")) {
		alert("yes! the x letter is in this word");
		document.getElementById('x').style.backgroundColor = '#00FF00';
	} else {
		alert("letter x is not in word");
		document.getElementById('x').style.backgroundColor = '#FF0000';
	}
}

let xButton = document.getElementById("x");
xButton.addEventListener("click", checkLetterX);

//letter y
function checkLetterY() {
	if (result.includes("y")) {
		alert("yes! the y letter is in this word");
		document.getElementById('y').style.backgroundColor = '#00FF00';
	} else {
		alert("letter y is not in word");
		document.getElementById('y').style.backgroundColor = '#FF0000';
	}
}

let yButton = document.getElementById("y");
yButton.addEventListener("click", checkLetterY);

//letter z
function checkLetterZ() {
	if (result.includes("z")) {
		alert("yes! the z letter is in this word");
		document.getElementById('z').style.backgroundColor = '#00FF00';
	} else {
		alert("letter z is not in word");
		document.getElementById('z').style.backgroundColor = '#FF0000';
	}
}

let zButton = document.getElementById("z");
zButton.addEventListener("click", checkLetterZ);

//let testButton = document.getElementById("test-button");
//testButton.addEventListener("click", checkLetterA);
