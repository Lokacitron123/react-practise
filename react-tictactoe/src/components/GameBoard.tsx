import { useState } from "react";
import type { PlayerSymbol } from "../App";

type GameBoardProps = {
  activePlayer: PlayerSymbol;
  setActivePlayer: React.Dispatch<React.SetStateAction<PlayerSymbol>>;
};

type CellValue = "X" | "O" | null;

// Tuple array with fixed values
type GameBoardType = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
];

const initialGameBoard: GameBoardType = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ activePlayer, setActivePlayer }: GameBoardProps) => {
  const [gameBoard, setGameBoard] = useState<GameBoardType>(initialGameBoard);

  // Update object & arrays in an immutable way. E.g. make a (deep) copy first is good practice
  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = prevGameBoard.map((row) => [
        ...row,
      ]) as GameBoardType;

      updatedGameBoard[rowIndex][colIndex] = activePlayer;

      return updatedGameBoard;
    });

    setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
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
