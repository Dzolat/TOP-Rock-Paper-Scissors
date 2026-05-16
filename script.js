let humanScore = 0
let computerScore = 0

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

function getHumanChoice()
{
    return prompt("Please choose one of the three: Rock, Paper, Scissors")
}

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice())
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
    console.log(answer)
    if (answer == 1)
        return "Computer"
    else if (answer == 2)
        return "Human"
    else
        return "Tie"
}

function finishRound()
{
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    let roundWon = playRound(humanChoice, computerChoice)

    console.log(`Your choice: ${humanChoice}\nComputer's choice: ${computerChoice}`)
    
    if (roundWon == "Computer")
    {
        console.log("You lost!")
        computerScore++;

    }
    else if (roundWon == "Human")
    {
        console.log("You won!")
        humanScore++;
    }
    else 
        console.log("Tie!")

    console.log(`Current scores:\nYou: ${humanScore}\nComputer: ${computerScore}`)
}

finishRound();
finishRound();
finishRound();
finishRound();
finishRound();