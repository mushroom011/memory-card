import Card from "./../card/Card";

const CardList = ({ cards, handleCardClick }) => {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          handleCardClick={handleCardClick(card.id)}
        />
      ))}
    </div>
  );
};

export default CardList;
