let yourSCore = 0;
let compScore = 0;

const msg = document.querySelector("#diaplayMessege")

const urscore = document.querySelector("#yourScore")
const compscore = document.querySelector("#compScore")

const compchoice = () => {
    const choicearray = ["rock", "paper", "scissor"]
    let randomno = Math.floor((Math.random() * 3))  // to get random number between 0 to 2
    let compChoiceid = choicearray[randomno]
    return compChoiceid
}
const tie = () => {
    msg.innerText = "Game was Draw. Play again..."
    msg.style.backgroundColor = "#211522"
    console.log("Tie")
}

const showWinner = (ask, userchoice, compchoicee) => {
    if (ask) {
        msg.innerText = `You won,Your ${userchoice} beats ${compchoicee}...`
        msg.style.backgroundColor = "green"
        yourSCore++
        urscore.innerText = yourSCore
        console.log("You Won")
    }
    else {
        msg.innerText = `You lost, ${compchoicee} beats your ${userchoice}....`
        msg.style.backgroundColor = "red"
        compScore++
        compscore.innerText = compScore
        console.log("U lose")
    }
}
const playGame = (userchoice) => {
    let compchoicee = compchoice()

    console.log("userchoice = ", userchoice)
    console.log("Comp choise= ", compchoicee)

    if ((userchoice === "rock" && compchoicee === "rock") || (userchoice === "paper" && compchoicee === "paper") || (userchoice === "scissor" && compchoicee === "scissor")) {
        tie();
    }
    else if ((userchoice === "rock" && compchoicee === "scissor") || (userchoice === "paper" && compchoicee === "rock") || (userchoice === "scissor" && compchoicee === "paper")) {
        let uwin = true
        showWinner(uwin, userchoice, compchoicee)

    }

    else {
        let uwin = false
        showWinner(uwin, userchoice, compchoicee)

    }

}

const Choices = document.querySelectorAll(".Choice")
Choices.forEach((Choice) => {
    Choice.addEventListener("click", () => {
        const userchoice = Choice.getAttribute("id")
        playGame(userchoice)
    })
});

