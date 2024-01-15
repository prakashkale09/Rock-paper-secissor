let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
console.log(choices);

const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

//computer choice
const genCompChoice=()=>
{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>
{
    console.log("Game is draw");
    msg.innerText = "Game is Draw! Play again";
    msg.style.backgroundColor = "black";
};

//output
const showWinner=(userWin,userChoice,compChoice)=>
{
   
    if(userWin)
    {
        userScore++;
        userScorepara.innerText = userScore;
        userScore++;
        console.log("You win!");
        msg.innerText = `You Win!${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        console.log("You Lose!");
        msg.innerText=`You Lose!${compChoice} beats${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame = (userChoice)=>
{
    console.log("user choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice = ",compChoice);

    if (userChoice===compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin = compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper")
        {
            userWin = compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

//user choice
choices.forEach((choice)=>
{
     choice.addEventListener("click",()=>
     {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
     });
});

