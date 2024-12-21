import '../styles/GameOver.css';
/* eslint-disable react/prop-types */
function GameOver({ resetGame }) {
  return (
    <div id="game_over">
      <h2>Game Over!</h2>
      <button onClick={resetGame}>Restart Game</button>
    </div>
  );
}

export default GameOver;
