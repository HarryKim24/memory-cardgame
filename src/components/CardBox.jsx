import '../styles/CardBox.css';
/* eslint-disable react/prop-types */
function CardBox({ displayedCards, handleCardClick }) {
  return (
    <div id="card_box">
      {displayedCards.map((card) => (
        <div
          key={card.id}
          className="card"
          onClick={() => handleCardClick(card)}
          style={{
            backgroundImage: `url(${card.imageUrl})`,
            backgroundSize: "cover",
          }}
        >
        </div>
      ))}
    </div>
  );
}

export default CardBox;
