const cells = document.querySelectorAll(".container_game_hole");
const scoreEl = document.querySelector("#score");
const startBtn = document.querySelector("#buton_start");
const mole = document.querySelector(".mole");

let score = 0;
let currentPos;
let gameStarted = false;

startBtn.addEventListener("click", start);

function start() {
  if (!gameStarted) {
    gameStarted = true;

    setInterval(() => {
      ///////retire les evenlistener//////
      cells.forEach((cell) => {
        cell.removeEventListener("click", handleCellClick);
      });

      //////clean les trous de la taupe/////
      cells.forEach((cell) => {
        cell.innerHTML = "";
      });

      ////// ajoute la taupe dans un trou random toutes les secondes/////
      currentPos = Math.floor(Math.random() * 9);
      cells[currentPos].innerHTML =
        '<div class="mole"> <span class= "mole_face">°_°</span> </div>';
      ///////ajoute les events listener////////
      cells.forEach((cell) => {
        cell.addEventListener("click", handleCellClick, { once: true });
      });
    }, 1000);
  }
}

function handleCellClick() {
  if (parseInt(this.getAttribute("data-index")) === currentPos) {
    score++;
    scoreEl.innerHTML = score;
  }
}
