const gameBoard = document.querySelector("#gameboard");
const playerDiplay = document.querySelector("#player");
const infoDisplay = document.querySelector("#info-display");

const width = 8;

let playerGo = "black";

playerDiplay.textContent = "black";

const startPieces = [
  rook,
  knight,
  bishop,
  king,
  queen,
  bishop,
  knight,
  rook,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  rook,
  knight,
  bishop,
  king,
  queen,
  bishop,
  knight,
  rook,
];

function createBoard() {
  startPieces.forEach((startPiece, i) => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = startPiece;
    square.firstChild?.setAttribute("draggable", true);
    square.setAttribute("square-id", i);

    const row = Math.floor((63 - i) / 8 + 1);

    if (row % 2 === 0) {
      square.classList.add(i % 2 === 0 ? "white" : "black");
    } else {
      square.classList.add(i % 2 === 0 ? "black" : "white");
    }

    if (i <= 15) {
      square.classList.add("black-deep");
    }
    if (i >= 48) {
      square.classList.add("white-deep");
    }

    gameBoard.append(square);
  });
}
createBoard();

const allSquare = document.querySelectorAll(".square");

// console.log(allSquare);

allSquare.forEach((square) => {
  square.addEventListener("dragstart", dragStart);
  square.addEventListener("dragover", dragOver);
  square.addEventListener("drop", dragDrop);
});

let startPostitionId;
let draggedElement;

function dragStart(e) {
  // console.log(e)
  // console.log(e.target)
  // console.log(e.target.parentNode.getAttribute('square-id'))
  startPostitionId = e.target.parentNode.getAttribute("square-id");
  draggedElement = e.target;
}

function dragOver(e) {
  e.preventDefault();

  // console.log(e.target);
  // console.log(e.preventDefault());
}

function dragDrop(e) {
  e.stopPropagation();
  console.log(e.target);
  const taken = e.target.classList.contains("peice");

  // e.target.parentNode.append(draggedElement)
  // e.target.remove()
  // e.target.append(draggedElement)

  // console.log(e)

  changePlayer();
}

function changePlayer() {
  if (playerGo === "black") {
    playerGo = "white";
    playerDiplay.textContent = "White";
    reverseIds();
  } else {
    revertIds();
    playerGo = "black";
    playerDiplay.textContent = "Black";
  }
}

function reverseIds() {
  const allSquares = document.querySelectorAll(".square");
  allSquare.forEach((square, i) =>
    square.setAttribute("square-id", width * width - 1 - i)
  );
}

function revertIds() {
  const allSquares = document.querySelectorAll(".square");
  allSquares.forEach((square, i) => square.setAttribute("square-id", i));
}
