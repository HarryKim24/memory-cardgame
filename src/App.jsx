import Header from './components/Header';
import GameOver from './components/GameOver';
import CardBox from './components/CardBox';
import useGame from './hooks/useGame'
import './App.css';

function App() {

  const {
    highScore,
    currentScore,
    displayedCards,
    gameOver,
    resetGame,
    handleCardClick,
  } = useGame();

  return (
    <>
      <Header highScore={highScore} currentScore={currentScore} />
      <div id="main">
        {gameOver ? (
          <GameOver resetGame={resetGame} />
        ) : (
          <CardBox
            displayedCards={displayedCards}
            handleCardClick={handleCardClick}
          />
        )}
      </div>
    </>
  );
}

export default App;
