function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player-name">Player 1</span>
            <span className="player-name">X</span>
          </li>
          <li>
            <span className="player-name">Player 2</span>
            <span className="player-name">O</span>
          </li>
        </ol>
      </div>
    </main>
  );
}

export default App;
