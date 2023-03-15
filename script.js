const btn = document.getElementById("button");
const de1 = document.getElementById("des1");
const de2 = document.getElementById("des2");
const de3 = document.getElementById("des3");
const de4 = document.getElementById("des4");
const de5 = document.getElementById("des5");
const de6 = document.getElementById("des6");
const scorePlayer1 = document.getElementById("scorePlayer1");
const scorePlayer2 = document.getElementById("scorePlayer2");
const Player = document.getElementById("player");

let countPlayer1 = 0;
let countPlayer2 = 0;
let currentPlayer = "player1";
const countWin = 100;

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
   return Math.floor(Math.random()* (max - min)) + min;
}

btn.addEventListener('click', e =>{
    if (countPlayer1 < countWin && countPlayer2 < countWin){
        if(currentPlayer === "player1"){
            let rand1 = random(1, 6)
            drawDe(rand1)
            countPlayer1 += rand1;
            scorePlayer1.innerHTML=countPlayer1;
            Player.innerHTML= "Joueur 2";
            currentPlayer = "player2";
        }
        else{
            let rand2 = random(1, 6)
            drawDe(rand2)
            countPlayer2 += rand2;
            scorePlayer2.innerHTML=countPlayer2;
            Player.innerHTML= "Joueur 1";
            currentPlayer = "player1";
        };
    }


    if(countPlayer1 >= countWin && countPlayer2 >= countWin){
        if(countPlayer1 > countPlayer2){
            alert("player1 win!")
        }else if (countPlayer1 < countPlayer2){
            alert("player2 win!")
        }else{
            alert("Egaliter!")
        }
        countPlayer1 = countWin
        countPlayer2 = countWin
    }
    else if(countPlayer1 >= countWin){
        alert("player1 win!")
        countPlayer1 = countWin
    }
    else if(countPlayer2 >= countWin){
        alert("player2 win!")
        countPlayer2 = countWin
    }
}
);

function drawDe(pcurrentDe){

    de1.style.display='none';
    de2.style.display='none';
    de3.style.display='none';
    de4.style.display='none';
    de5.style.display='none';
    de6.style.display='none';

    if(pcurrentDe === 1){
        de1.style.display='block';
    }else if(pcurrentDe === 2){
        de2.style.display='block';
    }else if(pcurrentDe === 3){
        de3.style.display='block';
    }else if(pcurrentDe === 4){
        de4.style.display='block';
    }else if(pcurrentDe === 5){
        de5.style.display='block';
    }else if(pcurrentDe === 6){
        de6.style.display='block';
    }
}