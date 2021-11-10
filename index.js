//PLAYER HEALTH
let player1Health = 100;
let player2Health = 100;
let player3Health = 100;

//SCORE
let player1Score = 0;
let player2Score = 0;
let player3Score = 0;

let round = 0;

function Random() {
  //to get a random number
  const player1 = Math.trunc(Math.random() * 5) + 0;

  const player2 = Math.trunc(Math.random() * 5) + 0;
  const player3 = Math.trunc(Math.random() * 5) + 0;

  //setting the current score
  document.getElementById("player1Score").innerHTML = player1;
  document.getElementById("player2Score").innerHTML = player2;
  document.getElementById("player3Score").innerHTML = player3;

  //calculating players health
  player1Health = player1Health - (player2 + player3);
  player2Health = player2Health - (player1 + player3);
  player3Health = player3Health - (player2 + player1);

  round++;

  //player whose health reaches 0 dies

  if (player1Health === 0) {
    gameOver("Player 2 Won!");
  }
  if (player2Health === 0) {
    gameOver("Player 1 Won!");
  }
  if (player3Health === 0) {
    gameOver("Player 3 Won!");
  }
  //working with buttons
  if (round === 5) {
    document.getElementById("startBtn").disabled = true;
    document.getElementById("startBtn").innerHTML = "Game Over";
    document.getElementById("startBtn").style.color = "white";
  }

  //finding the winner
  if (player1 > player2 && player1 > player3) {
    player1Score = player1Score + 1;
  }

  if (player2 > player1 && player2 > player3) {
    player2Score = player2Score + 1;
  }
  if (player3 > player1 && player3 > player2) {
    player3Score = player3Score + 1;
  }
  console.log(player1Score, player2Score);

  document.getElementById("score-3").innerHTML = player1Score;
  document.getElementById("score-6").innerHTML = player2Score;
  document.getElementById("score-9").innerHTML = player3Score;

  //checking for score 3
  if (player1Score === 3) {
    gameOver("Player 1 Won!");
  }

  if (player2Score === 3) {
    gameOver("Player 2 Won!");
  }
  if (player3Score === 3) {
    gameOver("Player 3 Won!");
  }
  ///checking for score 5
  if (round === 5) {
    if (player1Score > player2Score && player1Score > player3Score) {
      gameOver("Player 1 Won!");
    }

    if (player2Score > player1Score && player2Score > player3Score) {
      gameOver("Player 2 Won!");
    }
    if (player3Score > player1Score && player3Score > player2Score) {
      gameOver("Player 3 Won!");
    }

    //if all the players have scored equaly
    if ((player2Score === player1Score) === player3Score) {
      gameOver("Match Draw");
    }
  }
}

function gameOver(message) {
  document.getElementById("result").innerHTML = message;
  document.getElementById("startBtn").disabled = true;
  document.getElementById("startBtn").innerHTML = "Game Over";
  document.getElementById("startBtn").style.color = "white";
}

function Reset() {
  location.reload();
}
