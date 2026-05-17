import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import { checkDraw, checkWinner } from "./utils/game-helpers";

export type PlayerSymbol = "X" | "O";

export type CellValue = "X" | "O" | null;

// Tuple array with fixed values
export type GameBoardType = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
];

const initialGameBoard: GameBoardType = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

type ScoreBoard = {
  X: number;
  O: number;
};

function App() {
  const [activePlayer, setActivePlayer] = useState<PlayerSymbol>("X");
  const [gameBoard, setGameBoard] = useState<GameBoardType>(initialGameBoard);
  const [winner, setWinner] = useState<PlayerSymbol | null>(null);
  const [scoreBoard, setScoreBoard] = useState<ScoreBoard>({
    X: 0,
    O: 0,
  });
  const [seriesWinner, setSeriesWinner] = useState<PlayerSymbol | null>(null);

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    if (winner || seriesWinner) return;

    // Create the new board state
    const updatedBoard = gameBoard.map((row) => [...row]) as GameBoardType;
    updatedBoard[rowIndex][colIndex] = activePlayer;

    // Check for a winner on the NEW board
    const roundWinner = checkWinner(updatedBoard);

    // Update the board state
    setGameBoard(updatedBoard);

    // If someone won, update score and check for series win
    if (roundWinner) {
      setWinner(roundWinner);
      setScoreBoard((prev) => ({
        ...prev,
        [roundWinner]: prev[roundWinner] + 1,
      }));

      // Check if this player reached 3 wins
      if (scoreBoard[roundWinner] + 1 >= 3) {
        setSeriesWinner(roundWinner);
      }
    } else {
      //  If no winner, swap turns
      setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
    }
  };

  const resetGame = () => {
    setGameBoard(initialGameBoard);
    setWinner(null);
    setActivePlayer("X");
  };

  const resetSeries = () => {
    resetGame();
    setScoreBoard({ X: 0, O: 0 });
    setSeriesWinner(null);
  };

  // Derived state for UI
  const isDraw = !winner && checkDraw(gameBoard);

  return (
    <main>
      <div id="game-container">
        <div id="scoreboard-container">
          <div id="scoreboard">
            <p>Player X: {scoreBoard.X}</p>
            <p>Player O: {scoreBoard.O}</p>
          </div>

          {seriesWinner && (
            <h2>🏆 Player {seriesWinner} Wins the Series! 🏆</h2>
          )}
          {!seriesWinner && winner && <h2>Player {winner} wins the round!</h2>}
          {!seriesWinner && isDraw && <h2>It's a draw!</h2>}

          {!seriesWinner && (winner || isDraw) && (
            <button onClick={resetGame}>Start Next Round</button>
          )}
          {seriesWinner && (
            <button onClick={resetSeries}>Play New Series</button>
          )}
        </div>
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />

          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard gameBoard={gameBoard} onSelectSquare={handleSelectSquare} />
      </div>
    </main>
  );
}

export default App;
