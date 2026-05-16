import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="John" symbol="X" />
          <Player name="Jane" symbol="O" />
        </ol>
        Game board
      </div>
      Log
    </main>
  );
}

export default App;
