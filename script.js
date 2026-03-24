let userScore = 0;
let compScore = 0;

const userScorepara = document.querySelector("#YS");
const compScorepara = document.querySelector("#CS");
const choice = document.querySelectorAll(".Choice");
const msg = document.querySelector("#Msg");

const generateCompChoice = () => {
    const options = ["Rock", "Scissor", "Paper"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const draw = () => {
    console.log("The game was draw!");
    msg.innerText = "DRAW - Play Again!!";
    msg.style.backgroundColor = '#262626';
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        console.log("You WIN!!");
        userScorepara.innerText = userScore;
        msg.innerText = `You WON! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("You LOST!!");
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You LOSE! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("Your Choice is", userChoice);

    const compChoice = generateCompChoice();
    console.log("Computer Choice is:", compChoice);

    if (userChoice === compChoice) {
        draw();
    } else {
        let userWin = true;

        if (userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userWin = compChoice === "Scissor" ? false : true;
        } else {
            userWin = compChoice === "Rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});