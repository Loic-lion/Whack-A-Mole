const cells = document.querySelectorAll(".container_game_hole");
const scoreEl = document.querySelector("#score");
const startBtn = document.querySelector("#buton_start");
const mole = document.querySelector(".mole");

let score = 0;
let currentPos;
let gameStarted = false;

const limiteTimeDown = 600;
const limiteTimeUp = 1000;

const randomTime =
  Math.floor(Math.random() * (limiteTimeUp - limiteTimeDown + 1)) +
  limiteTimeDown;

startBtn.addEventListener("click", start);

function start() {
  if (!gameStarted) {
    gameStarted = true;

    setInterval(() => {
      ///////retire les events listener//////
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
    }, randomTime);
  }
}

function handleCellClick() {
  if (parseInt(this.getAttribute("data-index")) === currentPos) {
    score++;
    scoreEl.innerHTML = score;
  }
}
////////////////Randomisation du pop//////////////////////
setInterval(function () {
  var randomTime = Math.floor(Math.random() * 401) + 600;
}, 500);
