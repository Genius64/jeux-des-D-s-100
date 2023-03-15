const btn = document.getElementById("button");
const btnPoint = document.getElementById("btnPoint");
const de1 = document.getElementById("des1");
const de2 = document.getElementById("des2");
const de3 = document.getElementById("des3");
const de4 = document.getElementById("des4");
const de5 = document.getElementById("des5");
const de6 = document.getElementById("des6");
const scorePlayer1 = document.getElementById("scorePlayer1");
const scorePlayer2 = document.getElementById("scorePlayer2");
const Player = document.getElementById("player");
const point = document.getElementById("point");

let countPlayer1 = 0;
let countPlayer2 = 0;
let countPoint = 0;
let currentPlayer = "player1";
const countWin = 100;

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
   return Math.floor(Math.random()* (max - min)) + min;
}

btnPoint.addEventListener('click', e =>{
    if (countPlayer1 < countWin && countPlayer2 < countWin && countPoint > 0){
        if(currentPlayer === "player1"){
            countPlayer1 += countPoint;
            scorePlayer1.innerHTML = countPlayer1;
            Player.innerHTML = "Joueur 2";
            countPoint = 0;
            currentPlayer = "player2";
        }
        else{
            countPlayer2 += countPoint;
            scorePlayer2.innerHTML=countPlayer2;
            Player.innerHTML= "Joueur 1";
            countPoint = 0;
            currentPlayer = "player1";
        };
        drawDe(null)
        point.innerHTML=countPoint
    }

    if(countPlayer1 >= countWin){
        countPlayer1 = countWin
        alert("player1 win!")
    }
    else if(countPlayer2 >= countWin){
        countPlayer2 = countWin
        alert("player2 win!")
    }
}
);

btn.addEventListener('click', e=>{
    let rand = random(1, 6)
    if(rand === 1){
        countPoint = 0
        drawDe(null)
        if(currentPlayer === "player1"){
            currentPlayer = "player2"
            Player.innerHTML = "Joueur 2"
        }
        else{
            currentPlayer = "player1"
            Player.innerHTML = "Joueur 1"
        }
    }else{
        drawDe(rand)
        countPoint += rand
        point.innerHTML = countPoint
    }
})

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