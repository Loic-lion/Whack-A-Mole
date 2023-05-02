const cells = document.querySelectorAll(".container_game_hole");
const scoreEl = document.querySelector("#score");
const startBtn = document.querySelector("#buton_start");

let score = 0;
let currentPos;
let gameStarted = false;

startBtn.addEventListener("click", start);

function start() {
  if (!gameStarted) {
    // only start the game if it hasn't already started
    gameStarted = true;
    //////clean les trous de la taupe/////
    cells.forEach((cell) => {
      cell.innerHTML = "";
    });

    ////// ajoute la taupe dans un trou random/////
    currentPos = Math.floor(Math.random() * 9);
    cells[currentPos].innerHTML =
      '<div class="mole"><span class= "mole_face">°_°</span></div>';

    setInterval(() => {
      //////clean les trous de la taupe/////
      cells.forEach((cell) => {
        cell.innerHTML = "";
      });

      ////// ajoute la taupe dans un trou random toutes les secondes/////
      currentPos = Math.floor(Math.random() * 9);
      cells[currentPos].innerHTML =
        '<div class="mole"> <span class= "mole_face">°_°</span> </div>';
    }, 1000);
  }
}
