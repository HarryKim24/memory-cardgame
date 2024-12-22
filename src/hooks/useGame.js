/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from 'react';

const useGame = () => {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [displayedCards, setDisplayedCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const initializeCards = () => {
      const generatedCards = Array.from({ length: 300 }, (_, index) => ({
        id: index + 1,
        imageUrl: `https://picsum.photos/id/${index + 1}/200/200`,
      }));
      setCards(generatedCards);
    };

    initializeCards();
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      setDisplayedCards(generateRandomCards());
    }
  }, [cards]);

  const generateRandomCards = useCallback(() => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, [cards]);

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

  return {
    highScore,
    currentScore,
    displayedCards,
    gameOver,
    resetGame,
    handleCardClick,
  };
};

export default useGame;
