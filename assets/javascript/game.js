
//Wild West and Tombstone themed Hangman


//Bank of words to randomly pick from
const wordBank = ["cur", "peach", "deputy", "law", "sheriff", "daisy", "huckleberry", "doc holiday", "wyatt earp", "ok corral", "buffalo bill", "billy the kid", "wells fargo", "apache", "butch cassidy", "the duke", "bronco", "covered wagon", "smith and wesson"];
//initialize Playerwins to zero.  Keeps track of Wins.
var playerWins = 0;
//create empty array with letters that have been guessed
var lettersGuessed= [" "];
//Initialize an Empty Array with Answer
var hidenAnswer = [];
//initialize remainingGuesses
var remainingGuesses = 6;

var currentAnswer = [];

var wrongGuess = [" "];

var randomWord = "";

var realAnswer = [""];

var gamesWon = 0;

var gamesLost = 0;

var anyKey = "";



//create a randomWord with function 
function randomizer (){
randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
return randomWord;
}

//Hide Random Word
function generateHiddenWord(foo){
// Using a for loop to incorporate incorporate spaces
    for (var i=0; i < foo.length; i++){
        if(foo.charAt(i) == " "){
            realAnswer[i] = "&nbsp;";
            hidenAnswer[i]= "&nbsp;";
        }
        else{
            realAnswer[i] = randomWord.charAt(i);
            hidenAnswer[i] = " _ ";     
        }
    }
    currentAnswer = hidenAnswer.join(" ");
    document.getElementById("answerCurrent").innerHTML = currentAnswer;
}


//create a reset game function
function reset(){
    
    realAnswer = [""]
    wrongGuess = [""];
    lettersGuessed = [""];
    hidenAnswer=[""];
    remainingGuesses = 6;
    anyKey = "Press any Key to Start, the next game!"
    generateHiddenWord(randomizer())
}   


//Run Generate Hidden Word Function
randomizer();
generateHiddenWord(randomWord);

// reset();


// JavaScript a function to execute when onkeyup event fires.

document.onkeyup = function(event){
    keyPressed = event.key;
    var correctGuess = false;
    anyKey = "You're a daisy if you do!!";

    for (let i=0; i < randomWord.length; i++){
        if (randomWord[i] === keyPressed){
            hidenAnswer[i] = keyPressed;
            correctGuess = true;  
           
        }  
    }

    //counter for remaining guesses
    if (correctGuess != true && lettersGuessed.includes(keyPressed) != true){
            lettersGuessed.push(keyPressed);
            remainingGuesses--; 
    }
        
    if (remainingGuesses > 0){
        document.getElementById("outcome").innerHTML = "You're a daisy if you do!";
    }
    else {
        document.getElementById("outcome").innerHTML = "I'm your Huckleberry, try again!";
        document.getElementById('audioLose').play();
        gamesLost++;
        reset();
    }

    if(realAnswer.toString()==hidenAnswer.toString()){
        document.getElementById("outcome").innerHTML = "Great you Win!!!";
        document.getElementById("victories").innerHTML = gamesWon;
        document.getElementById('audioWin').play();
        gamesWon++;
        reset();

    }
   
    wrongGuess = lettersGuessed.join(" ");
    viewedAnswer = hidenAnswer.join(" ");

    document.getElementById("guessCount").textContent = remainingGuesses;
    document.getElementById("answerCurrent").innerHTML = viewedAnswer;
    document.getElementById("wrongGuess").textContent = wrongGuess;
    document.getElementById("loses").textContent = gamesLost;
    document.getElementById("startPrompt").textContent = anyKey;
    document.getElementById("victories").textContent = gamesWon;

}


