let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// generate a random computer Choice 
const genCompChoice = () => {
    const option= ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() *3);
    return option[randomIdx];
}

// Show who is the winner of this game
showWinner = (userWin, userChoice, CompChoice) => {
      if(userWin){
       userScore++;
       userScorePara.innerText = userScore;
    msg.innerHTML = `You win! your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "Green";
      }
      else{
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerHTML = `You lose! ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
      }
}

// Create the message if game is Draw
const DrawGame = () => {
    msg.innerHTML = "Game was Draw: play again!! "
    msg.style.backgroundColor = "gray";
    
}

// generate users choice and then compare them against the Comp choice
const playGame = (userChoice) => {
const CompChoice = genCompChoice();
    if(userChoice === CompChoice){
       
        DrawGame();
    }
    else{
        let userWin = true;

         if(userChoice === "rock"){
            // comp choice must be paper and scissors. then p>r and r>s
            userWin = CompChoice === "paper" ? false : true;   
         }
         else if(userChoice === "paper"){
            // comp choice must be rock and scissors. the p<<s and p>>r
            userWin = CompChoice === "scissors" ? false : true;
         }
         else{
            // user choice is scissors then comp choice must be rock and paper 
            // r>>s and s>>p
            userWin = CompChoice === "rock" ? false : true;
         }
         showWinner(userWin, userChoice, CompChoice);
    }
}

// for access each choices 
choices.forEach((choice) => {
    
    // add event listeners for choice 
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
      
        playGame(userChoice);

    });
});