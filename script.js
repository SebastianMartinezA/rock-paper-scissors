document.addEventListener("DOMContentLoaded", function(){

    let computerPoints = 0, humanPoints = 0;
    
    game();

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

    function score(roundResult){
        let leftScore = document.getElementById("leftScore");
        let rightScore = document.getElementById("rightScore");

        if(roundResult==="You win!")
                humanPoints++;
            else
                if(roundResult==="You lose!")
                    computerPoints++;
        
        

        leftScore.innerText = humanPoints;
        rightScore.innerText = computerPoints;

        if(computerPoints === 5 || humanPoints === 5){
            computerPoints = humanPoints = 0;
            setTimeout(function(){leftScore.innerText = humanPoints; rightScore.innerText = computerPoints;}, 2000)
        }
    }

    function game(){
        let i, playerSel, roundResult;
        
        let rockButton = document.getElementById("rockButton");
        let paperButton = document.getElementById("paperButton");
        let scissorsButton = document.getElementById("scissorsButton");
        
        rockButton.addEventListener("click", function(){
            playerSel = "rock";
            roundResult=roundFight(playerSel, computerPlay());
            score(roundResult);
        });
        paperButton.addEventListener("click", function(){
            playerSel = "paper";
            roundResult=roundFight(playerSel, computerPlay());
            score(roundResult);
        });
        scissorsButton.addEventListener("click", function(){
            playerSel = "scissors";
            roundResult=roundFight(playerSel, computerPlay());
            score(roundResult);
        });
    }
});