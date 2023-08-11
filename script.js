

document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById("game-container");
  const scoreElement = document.getElementById("score-value");
  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart Game";
  document.body.appendChild(restartButton);

/*
const grid = [
  ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
  ['wall', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'wall'],
  ['wall', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'player', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'wall'],
  ['wall', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'wall'],
  ['wall', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'wall'],
  ['wall', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'monster', 'empty', 'treasure', 'empty', 'empty', 'empty', 'wall'],
  ['wall', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'wall'],
  ['wall', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'wall'],
  ['wall', 'empty', 'empty', 'empty', 'empty', 'empty', 'monster', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'wall'],
  ['wall', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'wall'],
  ['wall', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'wall'],
  ['wall', 'empty', 'empty', 'treasure', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'wall'],
  ['wall', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'wall'],
  ['wall', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'wall'],
  ['wall', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'wall'],
  ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall']
 ];
*/



  const grid = [
  ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
  ['wall', 'empty', 'empty', 'empty', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
  ['wall', 'treasure', 'empty', 'monster', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'wall', 'wall', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'empty', 'empty', 'wall', 'wall', 'wall', 'empty', 'empty', 'empty', 'wall', 'wall', 'wall', 'wall', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'wall', 'wall', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'empty', 'wall', 'wall', 'empty', 'empty', 'wall', 'empty', 'wall', 'wall', 'wall', 'wall', 'empty', 'wall', 'wall', 'wall', 'wall', 'empty', 'empty', 'wall', 'empty', 'empty', 'wall'],
  ['wall', 'wall', 'empty', 'empty', 'empty', 'wall', 'empty', 'empty', 'wall', 'empty', 'wall', 'wall', 'wall', 'wall', 'empty', 'wall', 'wall', 'wall', 'wall', 'empty', 'empty', 'empty', 'empty', 'player', 'wall'],
  ['wall', 'wall', 'empty', 'empty', 'empty', 'wall', 'empty', 'empty', 'wall', 'empty', 'empty', 'empty', 'monster', 'empty', 'empty', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'empty', 'empty', 'wall'],
  ['wall', 'wall', 'wall', 'empty', 'wall', 'wall', 'wall', 'empty', 'wall', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'empty', 'wall', 'wall', 'wall', 'empty', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'empty', 'empty', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'empty', 'empty', 'empty', 'monster', 'empty', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'empty', 'empty', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'wall', 'empty', 'empty', 'empty', 'empty', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'empty', 'empty', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'empty', 'empty', 'empty', 'monster', 'wall', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'empty', 'empty', 'empty', 'empty', 'wall', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'empty', 'treasure', 'wall', 'wall', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall']
 ];


  
  const ROWS = grid.length;
  const COLS = grid[0].length;
  let playerRow, playerCol, score, isGameOver;
  score = 0;

  function createGrid() {
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const cell = document.createElement("div");
        cell.className = "cell " + grid[row][col];
        gridContainer.appendChild(cell);

        if (grid[row][col] === "player") {
          playerRow = row;
          playerCol = col;
        }
      }
    }
  }


  function updateScore() {
    scoreElement.textContent = score;
  }

function movePlayer(newRow, newCol) {
  if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLS) {
    return; // Invalid move
  }

  const newCell = grid[newRow][newCol];
  if (newCell === "empty" || newCell === "treasure") {
    grid[playerRow][playerCol] = "empty";
    grid[newRow][newCol] = "player";
    playerRow = newRow;
    playerCol = newCol;

    if (newCell === "treasure") {
      score++;
      updateScore();
      if (score === 2) {
        isGameOver = true;
        alert("Congratulations! You've won!");
      }
    }

    renderGrid();
  } else if (newCell === "monster") {
    isGameOver = true;
    alert("Game Over! You've been caught by a monster.");
  }
}



  function renderGrid() {
    gridContainer.innerHTML = ""; // Clear previous cells
    createGrid();
  }

  function getRandomDirection() {
    const directions = ["up", "down", "left", "right"];
    return directions[Math.floor(Math.random() * directions.length)];
  }

function moveMonsters() {
  if (isGameOver) {
    return;
  }

  const monsterCoordinates = [];

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (grid[row][col] === "monster") {
        monsterCoordinates.push({ row, col });
      }
    }
  }

  for (const monsterCoord of monsterCoordinates) {
    const direction = getRandomDirection();
    let newRow = monsterCoord.row;
    let newCol = monsterCoord.col;

    if (direction === "up") {
      newRow--;
    } else if (direction === "down") {
      newRow++;
    } else if (direction === "left") {
      newCol--;
    } else if (direction === "right") {
      newCol++;
    }

    if (
      newRow >= 0 &&
      newRow < ROWS &&
      newCol >= 0 &&
      newCol < COLS &&
      grid[newRow][newCol] === "empty"
    ) {
      grid[monsterCoord.row][monsterCoord.col] = "empty";
      grid[newRow][newCol] = "monster";
    }
  }

  renderGrid();
}


  restartButton.addEventListener("click", function () {
    // if (!isGameOver) {
    //   return;
    // }
    location.reload();
  });

  createGrid();
  updateScore();
  setInterval(moveMonsters, 1000); // Move monsters every second
  window.addEventListener("keydown", function (event) {
    if (isGameOver) {
      return;
    }

    switch (event.key) {
      case "ArrowUp":
        movePlayer(playerRow - 1, playerCol);
        break;
      case "ArrowDown":
        movePlayer(playerRow + 1, playerCol);
        break;
      case "ArrowLeft":
        movePlayer(playerRow, playerCol - 1);
        break;
      case "ArrowRight":
        movePlayer(playerRow, playerCol + 1);
        break;
    }
  });
});
