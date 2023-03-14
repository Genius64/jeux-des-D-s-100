const btn = document.getElementById("button");

let countPlayer1 = 0;
let countPlayer2 = 0;
let currentPlayer = "player1";

function random(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
   return Math.floor(Math.random()* (max - min)) + min;
}

if(countPlayer1 >= 100){
    //countPlayer1 = 100;
    alert("player1 win!")
}
else if(countPlayer2 >= 100){
    //countPlayer2 = 100;
    alert("player2 win!")
}else{
    btn.addEventListener('click', e =>{
        if(currentPlayer === "player1"){
            countPlayer1 += random(1, 6);
            console.log("Player1 à :"+countPlayer1);
            currentPlayer = "player2";
        }
        else{
            countPlayer2 += random(1, 6);
            console.log("Player2 à: "+countPlayer2);
            currentPlayer = "player1";
        };
    });
};