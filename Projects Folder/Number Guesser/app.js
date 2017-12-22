/*
GAME FUNCTION: 
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Grab elements
const game = document.querySelector("#game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessBtn = document.querySelector("#guess-btn");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector(".message");
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener 
game.addEventListener("mousedown", function(e){
    if(e.target.className === "play-again"){
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener("click", function(){
    let guess = parseInt(guessInput.value);

    // Validate 
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}.`, "red");
    }

    // Check if won
    if(guess === winningNum){
        // Game over - Won

       gameOver(true, `${winningNum} is correct, you win!!`);
    } else {
        // Wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0){
            // Game over - Lost

           gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
        } else {
            // Game continues - Answer wrong

             // Change border color
             guessInput.style.borderColor = "red";
             // Clear input
             guessInput.value = "";
             // Tell user it's wrong number
             setMessage(`${guess} is not correct. ${guessesLeft} guesses left`, "red");
        }
    }
});

// Game over
function gameOver(won, msg){
    let color;
    won === true ? color = "green" : color = "red";

    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set text color
    message.style.color = color;
    // Set message 
    setMessage(msg);

    // Play again?
    guessBtn.value = "Play Again";
    guessBtn.className += "play-again";
}

// Get winning number
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Set message 
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}




