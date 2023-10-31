import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";

const API_URL =
  "https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials";

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);

  const fetchData = async () => {
    const response = await fetch(API_URL);
    const { data } = await response.json();
    const cardsToShow = data.slice(0, 10);
    cardsToShow.forEach((card) => (card.clicked = false));
    setCards(cardsToShow);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCardClick = (id) => () => {
    const clickedCardIndex = cards.findIndex((card) => card.id === id);
    if (cards[clickedCardIndex].clicked === true) {
      setScore(0);
      fetchData();
      return;
    }

    const newCards = [
      ...cards.slice(0, clickedCardIndex),
      { ...cards[clickedCardIndex], clicked: true },
      ...cards.slice(clickedCardIndex + 1),
    ];
    newCards.sort(() => Math.random() - 0.5);

    setCards(newCards);
    setScore(score + 1);
  };

  return (
    <>
      <header>
        <h1>BOTW Compendium Memory Card Game</h1>
        <p>
          Clicking on a card will earn you a point, but if you click on the same
          card twice, the game will end!
        </p>
        <p className="score">Score: {score}</p>
      </header>
      <CardList cards={cards} handleCardClick={handleCardClick} />
    </>
  );
}

export default App;
