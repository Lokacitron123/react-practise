import type { GameBoardType, PlayerSymbol } from "../App";

/**
 * Checks if there is a winner on the current game board.
 *
 * @param gameBoard - The 3x3 grid representing the current state of the game.
 * @returns The winning player symbol ('X' or 'O') if someone won, or null if no winner yet.
 */
export function checkWinner(gameBoard: GameBoardType): PlayerSymbol | null {
  // --- 1. Check Rows ---
  // We loop through each of the 3 rows (index 0, 1, 2).
  // A row is a winning line if all 3 cells in that row are the same AND not null.
  for (let row = 0; row < 3; row++) {
    // gameBoard[row][0] gets the first cell of the current row.
    // We check if it exists (truthy) to ensure it's not null.
    // Then we compare it to the second [1] and third [2] cells in the SAME row.
    if (
      gameBoard[row][0] &&
      gameBoard[row][0] === gameBoard[row][1] &&
      gameBoard[row][0] === gameBoard[row][2]
    ) {
      // If all three match, we found a winner! Return that symbol immediately.
      return gameBoard[row][0];
    }
  }

  // --- 2. Check Columns ---
  // We loop through each of the 3 columns (index 0, 1, 2).
  // A column is a winning line if all 3 cells in that column are the same.
  for (let col = 0; col < 3; col++) {
    // gameBoard[0][col] gets the top cell of the current column.
    // We compare it to the middle [1][col] and bottom [2][col] cells.
    if (
      gameBoard[0][col] &&
      gameBoard[0][col] === gameBoard[1][col] &&
      gameBoard[0][col] === gameBoard[2][col]
    ) {
      // If all three match vertically, return the winner.
      return gameBoard[0][col];
    }
  }

  // --- 3. Check Diagonals ---
  // There are only two possible diagonal lines in a 3x3 grid.

  // Diagonal 1: Top-Left to Bottom-Right
  // Indices: (0,0), (1,1), (2,2)
  if (
    gameBoard[0][0] &&
    gameBoard[0][0] === gameBoard[1][1] &&
    gameBoard[0][0] === gameBoard[2][2]
  ) {
    return gameBoard[0][0];
  }

  // Diagonal 2: Top-Right to Bottom-Left
  // Indices: (0,2), (1,1), (2,0)
  if (
    gameBoard[0][2] &&
    gameBoard[0][2] === gameBoard[1][1] &&
    gameBoard[0][2] === gameBoard[2][0]
  ) {
    return gameBoard[0][2];
  }

  // --- 4. No Winner Found ---
  // If we checked all rows, columns, and diagonals and found no matches,
  // then there is currently no winner. Return null.
  return null;
}

/**
 * Checks if the game is a draw (tie).
 *
 * A draw occurs when:
 * 1. There is NO winner (checked separately by the caller).
 * 2. Every single cell on the board is filled (no nulls left).
 *
 * @param gameBoard - The 3x3 grid.
 * @returns True if the board is full, false if there are still empty spots.
 */
export function checkDraw(gameBoard: GameBoardType): boolean {
  // .every() returns true only if the callback returns true for EVERY item.
  // We nest two .every() calls because our board is an array of arrays.

  // Outer .every(): Loops through each ROW in the board.
  // Inner .every(): Loops through each CELL in that specific row.
  // Condition: cell !== null (the cell must be occupied by 'X' or 'O').
  return gameBoard.every((row) => row.every((cell) => cell !== null));
}
