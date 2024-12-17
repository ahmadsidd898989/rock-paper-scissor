let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg =  document.querySelector("#msg")
const userscorecount = document.querySelector("#userscore")
const compscorecount = document.querySelector("#compscore")

const drawGame = () =>{
    msg.innerText = "Game was Draw. Play again."
    msg.style.backgroundColor ="black"
}

const gencompchoice = () =>{
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner = (userwin, userchoice, compchoice) =>{
    if(userwin){
        userScore++;
        userscorecount.innerText = userScore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor ="green"
    } else {
        compScore++;
        compscorecount.innerText = compScore;
        msg.innerText = `You lost. ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor ="red"
    }
}
const playgame = (userchoice) => {
    // generate computer choice -> modular
    const compchoice = gencompchoice();

    if(userchoice===compchoice){
       drawGame(); 
    } else {
        let userwin = true;
        if(userchoice==="Rock"){
            // scissor, paper
            userwin = compchoice === "Paper" ? false : true;
        } else if ( userchoice === "Paper"){
            userwin = compchoice === "Scissors" ? false : true;
        } else {
            userwin = compchoice === "Rock" ? false : true;
        }
        showWinner(userwin, userchoice, compchoice);
    } 

}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
    });
});
