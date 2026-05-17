// GameBoard.tsx
import type { GameBoardType } from "../App";

type GameBoardProps = {
  gameBoard: GameBoardType;
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
};

const GameBoard = ({
  gameBoard,

  onSelectSquare,
}: GameBoardProps) => {
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={!!playerSymbol} // Optional: disable if already clicked
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
