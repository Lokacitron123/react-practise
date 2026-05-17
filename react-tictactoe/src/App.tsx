import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

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

function App() {
  // Union type to select which player's turn it is
  const [activePlayer, setActivePlayer] = useState<PlayerSymbol>("X");
  const [gameBoard, setGameBoard] = useState<GameBoardType>(initialGameBoard);

  return (
    <main>
      <div id="game-container">
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
        <GameBoard
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
          gameBoard={gameBoard}
          setGameBoard={setGameBoard}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;
