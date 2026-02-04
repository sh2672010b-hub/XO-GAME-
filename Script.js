let turn = "X";
let gameOver = false;

function play(cell) {
  if (cell.innerText !== "" || gameOver) return;

  cell.innerText = turn;

  if (checkWinner()) {
    gameOver = true;
    return;
  }

  turn = turn === "X" ? "O" : "X";
}

function checkWinner() {
  let cells = document.querySelectorAll(".cell");

  let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for (let combo of wins) {
    let a = cells[combo[0]];
    let b = cells[combo[1]];
    let c = cells[combo[2]];

    if (
      a.innerText !== "" &&
      a.innerText === b.innerText &&
      b.innerText === c.innerText
    ) {
      a.classList.add("win");
      b.classList.add("win");
      c.classList.add("win");
      alert(a.innerText + " فاز!");
      return true;
    }
  }
  return false;
}

function restartGame() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.innerText = "";
    cell.classList.remove("win");
  });
  turn = "X";
  gameOver = false;
}