let userscore=0;
let computer=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscores=document.querySelector("#user-score");
const compscores=document.querySelector("#computer-score");
const genComChoice= () =>{
    const options=["rock","paper","scissors"];
    //rock,paper,scissors
   const randIx= Math.floor(Math.random()*3);
   return options[randIx];
}
const drawGame=()=>{
    //console.log("game was draw");
    msg.innerHTML="Game was Draw. Play again!";
        msg.style.backgroundColor="black"
}
const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        userscore++;
        userscores.innerHTML=userscore;
        //console.log(`you win!${userchoice} beats ${compChoice}` );
        msg.innerHTML=`you win!${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        computer++;
        compscores.innerHTML=computer;
        //console.log("you lose");
        msg.innerHTML=`you lost!${compChoice} beats your  ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playgame=(userchoice)=>{
    //console.log("user choice",userchoice);
    //genarate computer choice
    const compChoice=genComChoice();
    console.log("computer choice",compChoice);
    if(userchoice===compChoice){
        //draw game
        drawGame();
        
    }else{
        let userWin=true;
        if(userchoice==="rock"){
            // computer scissors,rock
              userWin=compChoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            //computer rock,scissors
            compChoice==="scissors" ? false:true;
        }else{
            //rock,paper(user=scissors)
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userchoice,compChoice);
    }

}
choices.forEach((choice)=>{
   // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        //console.log(userchoice);
//console.log("choose was click");
playgame(userchoice);
    });
});
