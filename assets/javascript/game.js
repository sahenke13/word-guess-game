
//Wild West and Tombstone themed Hangman


//Bank of words to randomly pick from
var wordBank = ["cur", "peach", "deputy", "law", "sheriff", "daisy", "huckleberry", "doc holiday", "wyatt earp", "ok corral", "buffalo bill"];
//initialize Playerwins to zero.  Keeps track of Wins.
var playerWins = 0;
//initialize remainingGuesses
var startingGuesses = 5;
//create empty array with letters that have been guessed
var lettersGuessed= [];
//Initialize an Empty Array with Answer
var hidenAnswer = [];

var remainingGuesses = 5;

var currentAnswer = [];

var wrongGuess = [" "];

var randomWord = "";


//create a randomWord with function 
function randomizer (){
randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
return randomWord;
}

//Hide Random Word
function generateHiddenWord(foo){
// Using a for loop to incorporate incorporate spaces
    for (var i=0; i < foo.length; i++){
        if(randomWord.charAt(i) == " "){
            hidenAnswer[i]= "&nbsp;";
        }
        else{
            hidenAnswer[i] = "_";     
        }
    }
    currentAnswer = hidenAnswer.join(" ");
    console.log(hidenAnswer);   
    console.log(randomWord);
    document.getElementById("answerCurrent").innerHTML = currentAnswer;
}


//try to create a reset function
function reset(){
    hidenAnswer=[];
    generateHiddenWord(randomizer());
    remainingGuesses = 5;
    lettersGuessed = [];
    startingGuesses = 5;
    wrongGuess = [];
}

//Run Generate Hidden Word Function
randomizer();
generateHiddenWord(randomWord);
//Take Users Guess

// Next, we give JavaScript a function to execute when onkeyup event fires.

document.onkeyup = function(event){
    keyPressed = event.key;
    var correctGuess = false;
    for (var i=0; i < randomWord.length; i++){
        if (randomWord[i] === keyPressed){
            hidenAnswer[i] = keyPressed;
            correctGuess = true;  
        }  
    }

    //counter for remaining guesses
    if (correctGuess != true){
        lettersGuessed.push(keyPressed);
        remainingGuesses--;
        console.log(lettersGuessed);
    }
        
    if (remainingGuesses > 0){
        document.getElementById("outcome").innerHTML = "Your a daisy if you do!";
            }
    else {
        document.getElementById("outcome").innerHTML = "I'm your Huckleberry, try again!";
        reset();
    }
    if(hidenAnswer==currentAnswer){
        reset();
    }
    console.log(currentAnswer);
    console.log(hidenAnswer);
    wrongGuess = lettersGuessed.join(" ");
    viewedAnswer = hidenAnswer.join(" ");
    document.getElementById("guessCount").innerHTML = remainingGuesses;
    document.getElementById("answerCurrent").innerHTML = viewedAnswer;
    document.getElementById("wrongGuess").innerHTML = wrongGuess;
}

