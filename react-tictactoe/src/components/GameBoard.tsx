import type { GameBoardType, PlayerSymbol } from "../App";

type GameBoardProps = {
  activePlayer: PlayerSymbol;
  setActivePlayer: React.Dispatch<React.SetStateAction<PlayerSymbol>>;
  gameBoard: GameBoardType;
  setGameBoard: React.Dispatch<React.SetStateAction<GameBoardType>>;
};

const GameBoard = ({
  activePlayer,
  setActivePlayer,
  gameBoard,
  setGameBoard,
}: GameBoardProps) => {
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
