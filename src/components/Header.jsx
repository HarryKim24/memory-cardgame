import '../styles/Header.css';
/* eslint-disable react/prop-types */
function Header({ highScore, currentScore }) {
  return (
    <div id="header">
      <div id="title">
        <h1>Memory Card Game</h1>
      </div>
      <div id="score_box">
        <div id="high_score">High Score: {highScore}</div>
        <div id="current_score">Current Score: {currentScore}</div>
      </div>
    </div>
  );
}

export default Header;
