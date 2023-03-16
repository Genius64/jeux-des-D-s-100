const btn = document.getElementById("button");
const btnPoint = document.getElementById("btnPoint");
const btnReplay = document.getElementById("replay");
const de1 = document.getElementById("des1");
const de2 = document.getElementById("des2");
const de3 = document.getElementById("des3");
const de4 = document.getElementById("des4");
const de5 = document.getElementById("des5");
const de6 = document.getElementById("des6");
const scorePlayer1 = document.getElementById("scorePlayer1");
const scorePlayer2 = document.getElementById("scorePlayer2");
const player = document.getElementById("player");
const point = document.getElementById("point");
const user1 = document.getElementById("pseudo1");
const user2 = document.getElementById("pseudo2");
const btnComfirm = document.getElementById("comfirm");
const divPseudo = document.getElementById("pseudos");
const table_scores = document.getElementById("table_scores");
const flex_button = document.getElementById("flex_button");

let countPlayer1 = 0;
let countPlayer2 = 0;
let countPoint = 0;
let currentPlayer = "player1";
const countWin = 100;
let gameWin = false;
let pseudo1 = null;
let pseudo2 = null;

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
   return Math.floor(Math.random()* (max - min + 1)) + min;
}

btnComfirm.addEventListener('click', e=>{
    if (user1.value === "" || user2.value === "") {
        alert("Au moins l'un des champs n'a pas était remplie !")
    }else{
        pseudo1 = user1.value;
        pseudo2 = user2.value;
        divPseudo.style.display = 'none';
        flex_button.style.display ="flex"
        table_scores.style.display = 'block';
        player.style.display ="block";
        player.innerHTML = pseudo1;
        point.style.display="block";
    }
})

btnPoint.addEventListener('click', e =>{
    if (countPlayer1 < countWin && countPlayer2 < countWin && countPoint > 0){
        if(currentPlayer === "player1"){
            countPlayer1 += countPoint;
            scorePlayer1.innerHTML = countPlayer1;
            player.innerHTML = pseudo2;
            countPoint = 0;
            currentPlayer = "player2";
        }
        else{
            countPlayer2 += countPoint;
            scorePlayer2.innerHTML=countPlayer2;
            player.innerHTML= pseudo1;
            countPoint = 0;
            currentPlayer = "player1";
        };
        drawDe(null)
        point.innerHTML=countPoint
    }

    if(countPlayer1 >= countWin){
        countPlayer1 = countWin
        alert(pseudo1 +" a gagner!")
        btnPoint.style.display='none';
        btnReplay.style.display='block';
        gameWin=true;
    }
    else if(countPlayer2 >= countWin){
        countPlayer2 = countWin
        alert(pseudo2 +" a gagner!")
        btnPoint.style.display='none';
        btnReplay.style.display='block';
        gameWin=true;
    }
}
);

btn.addEventListener('click', e=>{
    if(gameWin === false){
        let rand = random(1, 6)
        if(rand === 1){
            countPoint = 0;
            drawDe(1)
            if(currentPlayer === "player1"){
                currentPlayer = "player2"
                player.innerHTML = pseudo2
            }
            else{
                currentPlayer = "player1"
                player.innerHTML = pseudo1
            }
        }else{
            drawDe(rand)
            countPoint += rand
        }
        point.innerHTML = countPoint
    }
})

btnReplay.addEventListener('click', e=>{
    countPoint = 0;
    countPlayer2 = 0;
    countPlayer1 = 0;
    btnReplay.style.display = "none";
    btnPoint.style.display = "block";
    scorePlayer2.innerHTML=0;
    scorePlayer1.innerHTML=0;
    currentPlayer = "player1";
    gameWin=false;

    divPseudo.style.display = 'flex';
    flex_button.style.display ="none"
    table_scores.style.display = 'none';
    player.style.display = "none";
    point.style.display="none";
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