let userscore=0;
let compscore=0;

const choice=document.querySelectorAll(".cho1");
const messge=document.querySelector("#messge");

const userscorepara= document.querySelector("#user-score");
const compscorepara= document.querySelector("#comp-score");

const gencompchoice = () =>{
    // rock,paper,scissors
    const options= ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3); // inbilde method Math.floor()=remove decimal value && Math.random()= genrate random number
    return options[randIdx];
};

const drawgame = () =>{
    messge.innerText=" Game Was Draw!"
    messge.style.backgroundColor="#081b31";
}

const showWinner =(userwin , userChoice, compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        messge.innerText =`You Win! Your ${userChoice} beats ${compchoice}` ;
        messge.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        messge.innerText =`You Lose ! ${compchoice} beats Your ${userChoice}`;
        messge.style.backgroundColor="red";
    }
};

const playgame = (userChoice) => {
    console.log("user choice=", userChoice);
    //generate computer choice
    const compchoice= gencompchoice();
    console.log("comp choice=", compchoice);

    if(userChoice === compchoice){
        //Draw Game
        drawgame();
    }else{
        let userwin= true;
        if( userChoice ==="rock"){
            //paper,scissors
            userwin = compchoice ==="paper"? false:true;
                }
                else if( userChoice ==="paper")
                    {
                        //rock,scissors
                        userwin = compchoice ==="scissors"? false:true;

                }
                else{
                    //rock, paper
                    userwin = compchoice ==="rock"? false:true;
                }

                showWinner (userwin , userChoice, compchoice);
    }


}

choice.forEach((cho1)=>{
    console.log(cho1);
    cho1.addEventListener("click",() => {
        const userChoice = cho1.getAttribute("id");
        playgame(userChoice);


    });
});