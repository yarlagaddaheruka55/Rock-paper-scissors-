let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

const choices = ["rock","paper","scissors"];

const computerChoice = choices[Math.floor(Math.random()*3)];

document.getElementById("playerChoice").textContent = playerChoice;

document.getElementById("computerChoice").textContent = computerChoice;

let result = "";

if(playerChoice===computerChoice){

result="It's a Draw!";

}
else if(
(playerChoice==="rock" && computerChoice==="scissors") ||
(playerChoice==="paper" && computerChoice==="rock") ||
(playerChoice==="scissors" && computerChoice==="paper")
){

result="🎉 You Win!";
playerScore++;

}
else{

result="😢 Computer Wins!";
computerScore++;

}

document.getElementById("resultText").textContent=result;

document.getElementById("playerScore").textContent=playerScore;

document.getElementById("computerScore").textContent=computerScore;

}

function resetGame(){

playerScore=0;
computerScore=0;

document.getElementById("playerScore").textContent=0;
document.getElementById("computerScore").textContent=0;

document.getElementById("playerChoice").textContent="-";
document.getElementById("computerChoice").textContent="-";

document.getElementById("resultText").textContent="Choose an option!";

}
