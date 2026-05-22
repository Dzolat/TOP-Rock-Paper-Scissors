let humanScore = 0
let computerScore = 0

let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");

let currentParagraph = document.getElementById("current_paragraph")
let computerScoreElement = document.getElementById("computer_score")
let humanScoreElement = document.getElementById("human_score")

function getComputerChoice()
{
    let Numb = Math.random() * 3
    if (Numb < 1)
        return "Rock"
    else if (Numb >= 1 && Numb < 2)
        return "Paper"
    else
        return "Scissors"
}

function playRound(humanChoice, computerChoice = getComputerChoice())
{
    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    function getAnswer()
    {
        if (humanChoice == computerChoice) {
            return 0
        }
        else if (humanChoice == "rock") {
            if (computerChoice == "paper")
                return 1
            else
                return 2
        }
    
        else if (humanChoice == "paper") {
            if (computerChoice == "scissors")
                return 1
            else
                return 2
        }
    
        else if (humanChoice == "scissors") {
            if (computerChoice == "rock")
                return 1
            else
                return 2
        }
    }
    
    let answer = getAnswer()

    if (answer == 1) {
        currentParagraph.textContent = "You lost!"
        computerScore++
        computerScoreElement.textContent = "Computer: " + computerScore
    } else if (answer == 2) {
        currentParagraph.textContent = "You won!"
        humanScore++
        humanScoreElement.textContent = "Human: " + humanScore
    } else {
        currentParagraph.textContent = "Tie!"
    }

    if (answer == 1)
        return "Computer"
    else if (answer == 2)
        return "Human"
    else
        return "Tie"
}


rockBtn.addEventListener("click", () => playRound("Rock"))
paperBtn.addEventListener("click", () => playRound("Paper"))
scissorsBtn.addEventListener("click", () => playRound("Scissors"))