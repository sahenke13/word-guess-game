
//Wild West and Tombstone themed Hangman


//Bank of words to randomly pick from
var wordBank = ["cur", "peach", "deputy", "law", "sheriff", "daisy", "huckleberry", "doc holiday", "wyatt earp", "ok corral", "buffalo bill", "billy the kid"];
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

var realAnswer = [""];

var gamesWon = 0;


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


//try to create a reset function
function reset(){
    realAnswer = [];
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

// JavaScript a function to execute when onkeyup event fires.

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
    }
        
    if (remainingGuesses > 0){
        document.getElementById("outcome").innerHTML = "Your a daisy if you do!";
    }
    else {
        document.getElementById("outcome").innerHTML = "I'm your Huckleberry, try again!";
        reset();
    }

    if(realAnswer.toString()==hidenAnswer.toString()){
        document.getElementById("outcome").innerHTML = "Great you Win!!!";
        reset();
        gamesWon++;
        console.log("you win!!!");
        document.getElementById("victories").innerHTML = gamesWon;
    }
   
    console.log(randomWord);
    console.log(hidenAnswer);
    console.log(realAnswer);
    wrongGuess = lettersGuessed.join("");
    viewedAnswer = hidenAnswer.join("");
    document.getElementById("guessCount").innerHTML = remainingGuesses;
    document.getElementById("answerCurrent").innerHTML = viewedAnswer;
    document.getElementById("wrongGuess").innerHTML = wrongGuess;
}


