import { useState } from 'react';
import Header from './components/Header';
import GameOver from './components/GameOver';
import CardBox from './components/CardBox';
import './App.css';

function App() {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [displayedCards, setDisplayedCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const generateColors = (count) => {
    return Array.from({ length: count }, (_, index) => {
      const hue = (index * (360 / count)) % 360;
      const saturation = 70;
      const lightness = 50;
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    });
  };

  const generateCards = () => {
    const colors = generateColors(300);
    return Array.from({ length: 300 }, (_, index) => ({
      id: index + 1,
      color: colors[index],
    }));
  };

  const cards = generateCards();

  const generateRandomCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  };

  const resetGame = () => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
    setCurrentScore(0);
    setSelectedCards([]);
    setDisplayedCards(generateRandomCards());
    setGameOver(false);
  };

  const handleCardClick = (card) => {
    if (selectedCards.includes(card.id)) {
      setGameOver(true);
    } else {
      setSelectedCards([...selectedCards, card.id]);
      const newScore = currentScore + 1;
      setCurrentScore(newScore);

      if (newScore > highScore) {
        setHighScore(newScore);
      }

      setDisplayedCards(generateRandomCards());
    }
  };

  if (displayedCards.length === 0) {
    setDisplayedCards(generateRandomCards());
  }

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
