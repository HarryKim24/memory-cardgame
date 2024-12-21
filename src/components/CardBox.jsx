import '../styles/CardBox.css';
/* eslint-disable react/prop-types */
function CardBox({ displayedCards, handleCardClick }) {
  return (
    <div id="card_box">
      {displayedCards.map((card) => (
        <div
          key={card.id}
          className="card"
          style={{ backgroundColor: card.color }}
          onClick={() => handleCardClick(card)}
        >
          {card.id}
        </div>
      ))}
    </div>
  );
}

export default CardBox;