//when a letter is pressed, need to search for word in the selected word or phrase
//must be able to detect how many wrong guesses there are
//must display different phases of hangman image
//have a game over screen when lives are used up
//if player uses up all lives display the answer in game over screen
//add timer
//add scoreboard

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
    } else {
        alert("letter a is not in word")
    }
}

let aButton = document.getElementById("a");
aButton.addEventListener("click", checkLetterA);

//letter b 
function checkLetterB() {
    if (result.includes("b")) {
        alert("yes! the b letter is in this word");
    } else {
        alert("letter b is not in word")
    }
}

let bButton = document.getElementById("b");
bButton.addEventListener("click", checkLetterB);

//letter c
function checkLetterC() {
    if (result.includes("c")) {
        alert("yes! the c letter is in this word");
    } else {
        alert("letter c is not in word")
    }
}

let cButton = document.getElementById("c");
cButton.addEventListener("click", checkLetterC);

//letter d 
function checkLetterD() {
    if (result.includes("d")) {
        alert("yes! the d letter is in this word");
    } else {
        alert("letter d is not in word")
    }
}

let dButton = document.getElementById("d");
dButton.addEventListener("click", checkLetterD);

//letter e
function checkLetterE() {
    if (result.includes("e")) {
        alert("yes! the e letter is in this word");
    } else {
        alert("letter e is not in word")
    }
}

let eButton = document.getElementById("e");
eButton.addEventListener("click", checkLetterE);

//letter f
function checkLetterF() {
    if (result.includes("f")) {
        alert("yes! the f letter is in this word");
    } else {
        alert("letter f is not in word")
    }
}

let fButton = document.getElementById("f");
fButton.addEventListener("click", checkLetterF);

//letter g 
function checkLetterG() {
    if (result.includes("g")) {
        alert("yes! the g letter is in this word");
    } else {
        alert("letter g is not in word")
    }
}

let gButton = document.getElementById("g");
gButton.addEventListener("click", checkLetterG);

//letter h 
function checkLetterH() {
    if (result.includes("h")) {
        alert("yes! the h letter is in this word");
    } else {
        alert("letter h is not in word")
    }
}

let hButton = document.getElementById("h");
hButton.addEventListener("click", checkLetterH);

//letter i
function checkLetterI() {
    if (result.includes("i")) {
        alert("yes! the i letter is in this word");
    } else {
        alert("letter i is not in word")
    }
}

let iButton = document.getElementById("i");
iButton.addEventListener("click", checkLetterI);

//letter j
function checkLetterJ() {
    if (result.includes("j")) {
        alert("yes! the j letter is in this word");
    } else {
        alert("letter j is not in word")
    }
}

let jButton = document.getElementById("j");
jButton.addEventListener("click", checkLetterJ);

//letter k 
function checkLetterK() {
    if (result.includes("k")) {
        alert("yes! the k letter is in this word");
    } else {
        alert("letter k is not in word")
    }
}

let kButton = document.getElementById("k");
kButton.addEventListener("click", checkLetterK);

//letter l
function checkLetterL() {
    if (result.includes("l")) {
        alert("yes! the l letter is in this word");
    } else {
        alert("letter l is not in word")
    }
}

let lButton = document.getElementById("l");
lButton.addEventListener("click", checkLetterL);

//letter m 
function checkLetterM() {
    if (result.includes("m")) {
        alert("yes! the m letter is in this word");
    } else {
        alert("letter m is not in word")
    }
}

let mButton = document.getElementById("m");
mButton.addEventListener("click", checkLetterM);

//letter n 
function checkLetterN() {
    if (result.includes("n")) {
        alert("yes! the n letter is in this word");
    } else {
        alert("letter n is not in word")
    }
}

let nButton = document.getElementById("n");
nButton.addEventListener("click", checkLetterN);

//letter o
function checkLetterO() {
    if (result.includes("o")) {
        alert("yes! the o letter is in this word");
    } else {
        alert("letter o is not in word")
    }
}

let oButton = document.getElementById("o");
oButton.addEventListener("click", checkLetterO);

//letter p
function checkLetterP() {
    if (result.includes("p")) {
        alert("yes! the p letter is in this word");
    } else {
        alert("letter p is not in word")
    }
}

let pButton = document.getElementById("p");
pButton.addEventListener("click", checkLetterP);

//letter q
function checkLetterQ() {
    if (result.includes("q")) {
        alert("yes! the q letter is in this word");
    } else {
        alert("letter q is not in word")
    }
}

let qButton = document.getElementById("q");
qButton.addEventListener("click", checkLetterQ);

//letter r 
function checkLetterR() {
    if (result.includes("r")) {
        alert("yes! the r letter is in this word");
    } else {
        alert("letter r is not in word")
    }
}

let rButton = document.getElementById("r");
rButton.addEventListener("click", checkLetterR);

//letter s
function checkLetterS() {
    if (result.includes("s")) {
        alert("yes! the s letter is in this word");
    } else {
        alert("letter s is not in word")
    }
}

let sButton = document.getElementById("s");
sButton.addEventListener("click", checkLetterS);

//letter t
function checkLetterT() {
    if (result.includes("t")) {
        alert("yes! the t letter is in this word");
    } else {
        alert("letter t is not in word")
    }
}

let tButton = document.getElementById("t");
tButton.addEventListener("click", checkLetterT);

//letter u
function checkLetterU() {
    if (result.includes("u")) {
        alert("yes! the u letter is in this word");
    } else {
        alert("letter u is not in word")
    }
}

let uButton = document.getElementById("u");
uButton.addEventListener("click", checkLetterU);

//letter v
function checkLetterV() {
    if (result.includes("v")) {
        alert("yes! the v letter is in this word");
    } else {
        alert("letter v is not in word")
    }
}

let vButton = document.getElementById("v");
vButton.addEventListener("click", checkLetterV);

//letter w 
function checkLetterW() {
    if (result.includes("w")) {
        alert("yes! the w letter is in this word");
    } else {
        alert("letter w is not in word")
    }
}

let wButton = document.getElementById("w");
wButton.addEventListener("click", checkLetterW);

//letter x
function checkLetterX() {
    if (result.includes("x")) {
        alert("yes! the x letter is in this word");
    } else {
        alert("letter x is not in word")
    }
}

let xButton = document.getElementById("x");
xButton.addEventListener("click", checkLetterX);

//letter y
function checkLetterY() {
    if (result.includes("y")) {
        alert("yes! the y letter is in this word");
    } else {
        alert("letter y is not in word")
    }
}

let yButton = document.getElementById("y");
yButton.addEventListener("click", checkLetterY);

//letter z
function checkLetterZ() {
    if (result.includes("z")) {
        alert("yes! the z letter is in this word");
    } else {
        alert("letter z is not in word")
    }
}

let zButton = document.getElementById("z");
zButton.addEventListener("click", checkLetterZ);

//let testButton = document.getElementById("test-button");
//testButton.addEventListener("click", checkLetterA);

