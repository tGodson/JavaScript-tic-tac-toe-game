
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  const gameBoard = () => {
    let roundWon = false;
    for (let i = 0; i <= 7; i += 1) {
      const winCondition = winningConditions[i];
      const a = gameState[winCondition[0]];
      const b = gameState[winCondition[1]];
      const c = gameState[winCondition[2]];
  
      if (a === '' || b === '' || c === '') {
        roundWon = false;
      } else if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }
    if (roundWon) {
      winningMessage();
      gameActive = false;
      return;
    }
  
  
    const roundDraw = !gameState.includes('');
    if (roundDraw) {
      statusDisplay.innerHTML = drawMessage();
      gameActive = false;
      return;
    }
  
    handlePlayerChange();
  };
  
  const game = (clickedCellEvent) => {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
      clickedCell.getAttribute('data-cell-index'), 10,
    );
    if (gameState[clickedCellIndex] !== '' || !gameActive) {
      return;
    }
  
    handleCellPlayed(clickedCell, clickedCellIndex);
    gameBoard();
  };
  
  const handleRestartGame = () => {
    localStorage.removeItem('players');
    window.location.reload();
  };