
//playerSelection = prompt("Choose a character: rock, paper, scissors");

function roundFight(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    switch(playerSelection){
        case "scissors":
            if(computerSelection === "scissors")
                return "Its a tie!";
            else
                if(computerSelection === "rock")
                    return "You lose!";
                else
                    if(computerSelection === "paper")
                        return "You win!";
            break;

        case "rock":
            if(computerSelection === "rock")
                return "Its a tie!";
            else
                if(computerSelection === "paper")
                    return "You lose!";
                else
                    if(computerSelection === "scissors")
                        return "You win!";
            break;

        case "paper":
            if(computerSelection === "paper")
                return "Its a tie!";
            else
                if(computerSelection === "scissors")
                    return "You lose!";
                else
                    if(computerSelection === "rock")
                        return "You win!";
            break;
    }
}

function computerPlay(){
    let num=Math.random()*9;
    if(num<3)
        return "rock";
    else
        if(num>6)
            return "paper";
        else
            return "scissors";
}

function game(){
    let i, playerSel, roundResult, computerPoints = 0, humanPoints = 0;
    for (i=0; i<5; i++){
        playerSel = prompt("Please enter your play", "Play!")
        roundResult = roundFight(playerSel, computerPlay());
        if(roundResult === "Its a tie!"){
            console.log(roundResult)
        }
        else
            if(roundResult === "You lose!"){
                console.log(roundResult)
                computerPoints++;
            }
            else{
                console.log(roundResult)
                humanPoints++;
            }
                
    }
    if(computerPoints>humanPoints)
        console.log("Computer wins!")
    else
        if(computerPoints<humanPoints)
            console.log("Human wins!")
        else
            console.log("Its a tie, robots dont dominate us yet!")
}

/*const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(roundFight(playerSelection, computerSelection));*/