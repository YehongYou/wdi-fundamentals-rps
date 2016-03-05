////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

    return var move = move || getInput(); /* Your Expression */; 
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return  var move = move || randomPlay(); /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    var playerMove = playerMove || getIput();
    var computerMove = computerMove || getComputerMove();

    switch (playerMove) {
    case 'rock':
        if(computerMove === 'rock'){
          winner = 'tie';
        }else if(computerMove==='paper'){
            winner = 'computer';
        }else if (computerMove=== 'scissors'){
            winner = 'player';
        }
    break;

    case 'paper':
        if(computerMove === 'rock'){
          winner = 'player';
        }else if(computerMove==='paper'){
            winner = 'tie';
        }else if (computerMove==='scissors'){
            winner = 'computer';
        }
    break;
    
    case 'scissors':
        if(computerMove === 'rock'){
          winner = 'computer';
        }else if(computerMove==='paper'){
            winner = 'player';
        }else if (computerMove==='scissors'){
            winner = 'tie';
        } 
    break;

    default:
    break;
  }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var round = 0;
    while (round < 5 ){ 
        if (getWinner(playerMove,computerMove)==="player"){
            playerWins ++;

        } else if (getWinner(playerMove,computerMove)==="computer"){
            playerWins ++;
        } else {
            console.log('this round is tie');
        }
        round = (playerWins >= computerWins)? playerWins:computerWins;
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }

    console.log('game is finished');
    return [playerWins, computerWins];
}

