const Card = ({ card, handleCardClick }) => {
  const { image, name } = card;

  return (
    <div className="card" onClick={handleCardClick}>
      <img className="card__img" src={image} alt={name} />
      <p className="card__text">{name}</p>
    </div>
  );
};

export default Card;
