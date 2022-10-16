const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id 
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length //
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "Look at that Ya'll think alike !! "
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'That is a WRAP!! around that rock cuz you WON!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = ' OH!! Snap!! is what your scissor did !!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = ' Slice!!! of that paper pie cuz you WON!!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = ' Who thought a Paper could beat a Rock :( '
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = " Can't cut nothing after that hit cuz you WON!!"
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = " You could always say it's confetti  "
    }
    resultDisplay.innerHTML = result

}

