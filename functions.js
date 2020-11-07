const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

const playerScore = document.querySelector('#playerScore')
const computerScore = document.querySelector('#computerScore')

const roundKeeper = document.querySelector('#rounds')
const result = document.querySelector('#result')
const reset = document.querySelector('#reset')

rock.addEventListener('click', function() {
    computerSelection = computerPlay();
    playRound('rock',computerSelection);
} )

paper.addEventListener('click', function() {
    computerSelection = computerPlay();
    playRound('paper',computerSelection);
} )

scissors.addEventListener('click', function() {
    computerSelection = computerPlay();
    playRound('scissors',computerSelection);
} )

reset.addEventListener('click', function() {
    resetScore();
} )

function computerPlay() {
    options = ['rock','paper','scissors']
    selection = Math.floor(Math.random()*options.length);
    output = options[selection];
    
    return output
}

function playRound(playerSelection, computerSelection) {
    // turn both selections to lower case 
    playerUpdated = playerSelection.toLowerCase();
    computerUpdated = computerSelection.toLowerCase();
    //increase rounds by one
    rounds = roundKeeper.innerText
    updatedRounds = rounds.slice(0,rounds.length-1) + (parseInt(rounds[rounds.length-1]) + 1); //messes up beyond 20 cause of how parse string
    roundKeeper.innerText = updatedRounds
    // do an if else comparison for tie first and then winning scenarios
    if (playerUpdated === computerUpdated) {
        result.innerText = 'You Tied! Play again'
    }
    else if (playerUpdated === 'scissors' && computerUpdated === 'rock') {
        result.innerText = 'You Lose! Rock beats scissors'
        computerScore.innerText = parseInt(computerScore.innerText) + 1
    }
    else if (playerUpdated === 'rock' && computerUpdated === 'paper') {
        result.innerText = 'You Lose! Paper beats rock'
        computerScore.innerText = parseInt(computerScore.innerText) + 1
        } 
    else if (playerUpdated === 'paper' && computerUpdated === 'scissors') {
        result.innerText = 'You Lose! Scissors beats paper'
        computerScore.innerText = parseInt(computerScore.innerText) + 1
        } 
    else if (playerUpdated === 'scissors' && computerUpdated === 'paper') {
        result.innerText = 'You Win! Scissors beats paper'
        playerScore.innerText = parseInt(playerScore.innerText) + 1
    }
    else if (playerUpdated === 'rock' && computerUpdated === 'scissors') {
        result.innerText = 'You Win! Rock beats scissors'
        playerScore.innerText = parseInt(playerScore.innerText) + 1
        } 
    else if (playerUpdated === 'paper' && computerUpdated === 'rock') {
        result.innerText = 'You Win! Paper beats rock'
        playerScore.innerText = parseInt(playerScore.innerText) + 1
    }
    if (computerScore.innerText == '5') {
        result.innerText = 'The computer has won :('
        //remove event listener
    }
    else if (playerScore.innerText == '5') {
        result.innerText = 'You have won!'
    }
}

function resetScore() {
    playerScore.innerText = '0';
    computerScore.innerText = '0';
    roundKeeper.innerText = '# of Rounds: 0';
    result.innerText = ''
}