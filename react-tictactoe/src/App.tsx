import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

export type PlayerSymbol = "X" | "O";

function App() {
  // Union type to select which player's turn it is
  const [activePlayer, setActivePlayer] = useState<PlayerSymbol>("X");

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
        />
      </div>
      Log
    </main>
  );
}

export default App;
