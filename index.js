let counter = 0;
const winningPatern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [2, 5, 8],
  [1, 4, 7]
];
let firstPlayer = [];
let secondPlayer = [];

function game() {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.className = `cell`;
    document.getElementById("board").appendChild(cell);
    cell.addEventListener("mouseover", () => {
      cell.classList.add("hovered");
    });
    cell.addEventListener("mouseout", () => {
      cell.classList.remove("hovered");
    });
    cell.addEventListener("click", () => {
      if (cell.classList.contains("clicked")) {
        return null;
      } else {
        counter += 1;
        cell.classList.add("clicked");
        if (counter % 2 == 1) {
          cell.innerHTML = "<h1>O</h1>";
          firstPlayer.push(i);
          winningPatern.forEach((patern) => {
            if (patern.every((value) => firstPlayer.includes(value))) {
              board.innerHTML = "<h1>PLAYER 1 WINS!</h1>";
              return;
            }
            if (counter == 9) {
              board.innerHTML = "<h1>IT'S A TIE!</h1>";
            }
          });
        } else {
          cell.innerHTML = "<h1>X</h1>";
          secondPlayer.push(i);
          winningPatern.forEach((patern) => {
            if (patern.every((value) => secondPlayer.includes(value))) {
              board.innerHTML = "<h1>PLAYER 2 WINS!</h1>";
              return;
            }
          });
        }
      }
    });
  }
}

document.querySelector("button").addEventListener("click", () => {
  document.getElementById("board").innerHTML = "";
  firstPlayer = [];
  secondPlayer = [];
  counter = 0;
  game();
});

game();

window.addEventListener('DOMContentLoaded', ()=> {
    board.style = `transform: scale(${window.innerWidth/20}%)`
})
window.addEventListener('resize', ()=> {
    board.style = `transform: scale(${window.innerWidth > 800 ? 100 : window.innerWidth/8}%)`
})